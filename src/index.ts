import { decodeBase85 } from "./decode";
import { encodeBase85 } from "./encode";
export type * from "./encode";
export { encodeBase85, decodeBase85 };

const base85 = {
  encode: encodeBase85,
  decode: decodeBase85,
} as const;

export default base85;
