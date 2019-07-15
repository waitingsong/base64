# [base64](https://waitingsong.github.io/base64/)

Base64 encoding/decoding in pure JS on both modern Browsers and Node.js based on [base64-js](https://www.npmjs.com/package/base64-js).  
Also supports [URL-safe base64](https://en.wikipedia.org/wiki/Base64#URL_applications)

[![Version](https://img.shields.io/npm/v/@waiting/base64.svg)](https://www.npmjs.com/package/@waiting/base64)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![](https://img.shields.io/badge/lang-TypeScript-blue.svg)
[![Build Status](https://travis-ci.org/waitingsong/base64.svg?branch=master)](https://travis-ci.org/waitingsong/base64)
[![Build status](https://ci.appveyor.com/api/projects/status/wp4a72sj7bc5ao3t/branch/master?svg=true)](https://ci.appveyor.com/project/waitingsong/base64/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/waitingsong/base64/badge.svg?branch=master)](https://coveralls.io/github/waitingsong/base64?branch=master)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Features
- Supports typeof `string`, `number` and [`bigint`](https://github.com/tc39/proposal-bigint)
- Supports `ArrayBuffer` or `Uint8Array`
- Encoding/Decoding via `TextEncoder`/`TextDecoder` under browser and `Buffer` under Node.js
- Building various modules`ESM`, `UMD` and `CJS`


## Browser requirement
- Ability of [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder#Browser_compatibility) and 
  [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder#Browser_compatibility)
- Polyfill [text-encoding](https://github.com/inexorabletash/text-encoding) for Edge


## Node.js requirement
- v10.4.0+ for `bigint` base64 encoding
- [ICU](https://nodejs.org/api/util.html#util_whatwg_supported_encodings) installation for base64 decoding with char encodings other then `utf-8` and `utf-16le`


## Installing
```bash
npm install @waiting/base64
```


## Usage of Node.js

See the [Docs](https://waitingsong.github.io/base64/) for details

### Encoding
```ts
import { b64encode, b64fromBuffer, b64urlEncode } from '@waiting/base64'

b64encode('A') === 'QQ=='
b64encode('schöne') === 'c2Now7ZuZQ=='
b64encode(1n) === b64encode(1) // bigint -> 'MQ==' 
b64encode('𠮷') === b64encode('\uD842\uDFB7') === b64encode('\u{20BB7}') // '8KCutw=='

const u8arr = Uint8Array.from([0xe4, 0xb8, 0xad, 0xe6, 0x96, 0x87])
b64fromBuffer(u8arr) === b64encode('中文')  // '5Lit5paH'

// URL-safe
b64urlEncode('A') === 'QQ'
b64urlEncode('中文测试') === '5Lit5paH5rWL6K-V'
```

### Decoding
```ts
import { b64decode, b64urlDecode } from '@waiting/base64'

b64decode('MQ==') === '1'
b64urlDecode('MQ') === '1'
```

### Transfer
```ts
import { b64toURLSafe, b64fromURLSafe } from '@waiting/base64'

// base64 -> URL-safe base64
b64toURLSafe('QQ==') === 'QQ'
b64toURLSafe('5Lit5paH5rWL6K+V') === '5Lit5paH5rWL6K-V'

// URL-safe base64 -> base64
b64fromURLSafe('QQ') === 'QQ=='
b64fromURLSafe('0J_RgNC40LLQtdGCLCDQvNC40YAh') === '0J/RgNC40LLQtdGCLCDQvNC40YAh'
```


## Usage of browser

See the [Docs](https://waitingsong.github.io/base64/) for details

### ESM
```html
<script type="module">
  import { b64encode, b64urlEncode } from './base64.esm.min.js' 
  
  console.log( b64encode('A') ) // 'QQ=='
  console.log( b64urlEncode('A') )  // 'QQ'
  console.log( b64encode('\uD842\uDFB7') ) // '8KCutw=='
</script>
```

### UMD
```html
<!-- polyfill for Edge
  Note: text-encoder-lite parse 4-bytes UTF-8 char incorrectly,
  so use text-encoding instead.
  see: https://github.com/solderjs/TextEncoderLite/issues/16
-->
<!--
<script src="https://raw.githubusercontent.com/inexorabletash/text-encoding/master/lib/encoding-indexes.js"></script>
<script src="https://raw.githubusercontent.com/inexorabletash/text-encoding/master/lib/encoding.js"></script>
-->
<script src="./base64.umd.min.js"></script>
<script>
  // global variable base64
  console.log( base64.b64encode('A') )
  console.log( base64.b64urlEncode('A') )
  console.log( base64.b64encode('\uD842\uDFB7') )
</script>
```


## Testing
```sh
npm run test

# for browsers FireFox and Chrome
npm run test:browser

# for browsers all available on this client
cd .config && npm i
npm run browser:detect
```


## Demo
- [Browser](https://github.com/waitingsong/base64/blob/master/test_browser/)
- [Node.js](https://github.com/waitingsong/base64/blob/master/test/)


## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)
