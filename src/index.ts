/**
 * `@nurliman/base85` is a Base85 encoder and decoder that compatible for Node.js and browser.
 *
 * ## Usage
 *
 * Import the package into your project:
 *
 * ```ts
 * import { encodeBase85, decodeBase85 } from "@nurliman/base85";
 *
 * const encoded = encodeBase85("your string");
 * const decoded = decodeBase85(encoded);
 * ```
 *
 * using default import:
 *
 * ```ts
 * import base85 from "@nurliman/base85";
 *
 * const encoded = base85.encode("your string");
 * const decoded = base85.decode(encoded);
 * ```
 *
 * using require:
 *
 * ```ts
 * const { encodeBase85, decodeBase85 } = require("@nurliman/base85");
 *
 * const encoded = encodeBase85("your string");
 * const decoded = decodeBase85(encoded);
 * ```
 *
 * Please replace `'your string'` with the string you want to encode and decode.
 *
 * ### EncodeOptions
 *
 * `EncodeOptions` is an object that can be passed to the encode function to customize its behavior. It has the following properties:
 *
 * - `wrap`: If true, the encoded string will be wrapped in `<~` and `~>`. Defaults to `true`.
 *
 * Here's an example of how to use it:
 *
 * ```ts
 * import base85 from "@nurliman/base85";
 *
 * const result = base85.encode("Hello World!");
 * console.log(result);
 * // <~87cURD]i,"Ebo80~>
 *
 * const result = base85.encode("Hello World!", {
 *   wrap: false, // Set this to false if you don't want the output to be wrapped
 * });
 * console.log(result);
 * // 87cURD]i,"Ebo80
 * ```
 *
 * ### Decode
 *
 * ```ts
 * import base85 from "@nurliman/base85";
 *
 * const result = base85.decode('<~87cURD]i,"Ebo80~>');
 * console.log(result);
 * // Hello World!
 *
 * // it also works without the wrapping characters
 * const result = base85.decode('87cURD]i,"Ebo80');
 * console.log(result);
 * // Hello World!
 * ```
 * @module
 */

import { decodeBase85 } from "./decode.ts";
import { encodeBase85 } from "./encode.ts";
export type * from "./encode.ts";
export { encodeBase85, decodeBase85 };

/**
 * Base85 encoder and decoder
 */
const base85 = {
  encode: encodeBase85,
  decode: decodeBase85,
};

export default base85;
