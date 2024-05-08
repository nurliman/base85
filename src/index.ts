import { decodeBase85 } from "./decode.ts";
import { encodeBase85 } from "./encode.ts";
export type * from "./encode.ts";
export { encodeBase85, decodeBase85 };

const base85 = {
  encode: encodeBase85,
  decode: decodeBase85,
};

export default base85;
