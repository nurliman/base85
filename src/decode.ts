/**
 * Decodes a string from ASCII85
 * @example
 * import base85 from "@nurliman/base85";
 *
 * base85.decode('<~87cURD]i,"Ebo80~>');
 * // output: Hello World!
 *
 * // it also works without the wrapping characters
 * base85.decode('87cURD]i,"Ebo80');
 * // output: Hello World!
 */
export const decodeBase85 = (input: string): string => {
  // Define constants and variables
  const ASCII_OFFSET = 33;
  const BASE85_BLOCK_SIZE = 5;
  const BYTE_MASK = 255;

  // Check if input string is wrapped with "<~" and "~>", remove them if true
  input = input.replace(/<~/g, "").replace(/~>/g, "");

  // Remove all whitespace characters and replace "z" with "!!!!!"
  input = input.replace(/\s/g, "").replace("z", "!!!!!");

  // Calculate the number of padding characters needed to make the input length a multiple of 5
  const paddingLength = input.length % BASE85_BLOCK_SIZE || BASE85_BLOCK_SIZE;
  const paddingCharacters = "uuuuu".slice(paddingLength);

  // Add the padding characters to the input
  input += paddingCharacters;

  // Initialize the array to hold the decoded bytes
  const decodedBytes: number[] = [];

  // Loop over the input string in chunks of 5 characters
  for (let chunkStart = 0; input.length > chunkStart; chunkStart += 5) {
    // Decode the current chunk and add the decoded bytes to the array
    const decodedChunk =
      52200625 * (input.charCodeAt(chunkStart) - ASCII_OFFSET) +
      614125 * (input.charCodeAt(chunkStart + 1) - ASCII_OFFSET) +
      7225 * (input.charCodeAt(chunkStart + 2) - ASCII_OFFSET) +
      85 * (input.charCodeAt(chunkStart + 3) - ASCII_OFFSET) +
      (input.charCodeAt(chunkStart + 4) - ASCII_OFFSET);
    decodedBytes.push(
      BYTE_MASK & (decodedChunk >> 24),
      BYTE_MASK & (decodedChunk >> 16),
      BYTE_MASK & (decodedChunk >> 8),
      BYTE_MASK & decodedChunk,
    );
  }

  // Remove the padding bytes from the end of the array
  for (let charsLen = paddingCharacters.length; charsLen > 0; charsLen--) {
    decodedBytes.pop();
  }

  // Convert the array of decoded bytes to a string and return it
  return String.fromCharCode(...decodedBytes);
};
