# @nurliman/base85

## Description

`@nurliman/base85` is a Base85 encoder and decoder that compatible for Node.js and browser.

## Installation

To install the package, run the following command:

```bash
npm install @nurliman/base85
```

## Usage

Import the package into your project:

```js
import { encodeBase85, decodeBase85 } from "@nurliman/base85";

const encoded = encodeBase85("your string");
const decoded = decodeBase85(encoded);
```

using default import:

```js
import base85 from "@nurliman/base85";

const encoded = base85.encode("your string");
const decoded = base85.decode(encoded);
```

using require:

```js
const { encodeBase85, decodeBase85 } = require("@nurliman/base85");

const encoded = encodeBase85("your string");
const decoded = decodeBase85(encoded);
```

Please replace `'your string'` with the string you want to encode and decode.

### EncodeOptions

`EncodeOptions` is an object that can be passed to the encode function to customize its behavior. It has the following properties:

- `wrap`: If true, the encoded string will be wrapped in `<~` and `~>`. Defaults to `true`.

Here's an example of how to use it:

```js
import base85 from "@nurliman/base85";

const result = base85.encode("Hello World!");
console.log(result);
// <~87cURD]i,"Ebo80~>

const result = base85.encode("Hello World!", {
  wrap: false, // Set this to false if you don't want the output to be wrapped
});
console.log(result);
// 87cURD]i,"Ebo80
```

### Decode

```js
import base85 from "@nurliman/base85";

const result = base85.decode('<~87cURD]i,"Ebo80~>');
console.log(result);
// Hello World!

// it also works without the wrapping characters
const result = base85.decode('87cURD]i,"Ebo80');
console.log(result);
// Hello World!
```

## Author

[Nurliman Diara](https://nurliman.dev)

## License

This project is licensed under the MIT License.
