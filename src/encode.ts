export type EncodeOptions = {
  /**
   * If true, the encoded string will be wrapped in `<~` and `~>`.
   * @default true
   */
  wrap?: boolean;
};

/**
 * Encodes a string to ASCII85
 * @param input The string to encode
 * @param options Options for encoding
 * @returns The encoded string
 * @example
 *
 * import base85 from "@nurliman/base85";
 *
 * base85.encode("Hello World!");
 * // output: <~87cURD]i,"Ebo80~>
 *
 * base85.encode("Hello World!", { wrap: false });
 * // output: 87cURD]i,"Ebo80
 */
export const encodeBase85 = (input: string, { wrap = true }: EncodeOptions = {}): string => {
  const paddingLength = input.length % 4 || 4;
  const padding = "\x00\x00\x00\x00".slice(paddingLength);
  input += padding;

  const encodedArray = [];

  for (let index = 0; index < input.length; index += 4) {
    let charCodeSum =
      (input.charCodeAt(index) << 24) +
      (input.charCodeAt(index + 1) << 16) +
      (input.charCodeAt(index + 2) << 8) +
      input.charCodeAt(index + 3);

    if (charCodeSum !== 0) {
      const encodedChars = [];
      for (let j = 0; j < 5; j++) {
        const encodedChar = charCodeSum % 85;
        charCodeSum = (charCodeSum - encodedChar) / 85;
        encodedChars.unshift(encodedChar + 33);
      }
      encodedArray.push(...encodedChars);
    } else {
      encodedArray.push(122);
    }
  }

  // Remove padding from the end of the encoded array
  for (let i = padding.length; i > 0; i--) {
    encodedArray.pop();
  }

  const encodedString = String.fromCharCode(...encodedArray);
  const output = wrap ? `<~${encodedString}~>` : encodedString;

  return output;
};
