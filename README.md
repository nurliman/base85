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

## Author

[Nurliman Diara](https://nurliman.dev)

## License

This project is licensed under the MIT License.
