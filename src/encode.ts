export const encodeBase85 = (input: string) => {
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

  return "<~" + String.fromCharCode(...encodedArray) + "~>";
};
