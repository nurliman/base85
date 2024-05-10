export function charCodeArrayToString(charCodes: number[]): string {
  let output = "";
  for (let i = 0; i < charCodes.length; i++) {
    output += String.fromCharCode(charCodes[i]);
  }
  return output;
}
