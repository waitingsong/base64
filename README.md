# Base64

Base64 encoding/decoding in pure JS on both modern Browsers and Node.js based on [base64-js](https://www.npmjs.com/package/base64-js)

[![Version](https://img.shields.io/npm/v/@waiting/base64.svg)](https://www.npmjs.com/package/@waiting/base64)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/waitingsong/base64.svg?branch=master)](https://travis-ci.org/waitingsong/base64)
[![Build status](https://ci.appveyor.com/api/projects/status/wp4a72sj7bc5ao3t/branch/master?svg=true)](https://ci.appveyor.com/project/waitingsong/base64/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/waitingsong/base64/badge.svg?branch=master)](https://coveralls.io/github/waitingsong/base64?branch=master)



## Features
- Encoding input supports typeof `string`, `number` and [`bigint`](https://github.com/tc39/proposal-bigint)
- Encoding input supports `ArrayBuffer` or `Uint8Array`
- Encoding/Decoding via `TextEncoder`/`TextDecoder` under browser and `Buffer` under Node.js


## Browser requirement
- Browsers which support [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder#Browser_compatibility) and 
  [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder#Browser_compatibility)


## Node.js requirement
- v8.16.0+ for `bigint` base64 encoding
- [ICU](https://nodejs.org/api/util.html#util_whatwg_supported_encodings) installation for base64 decoding with encodeings other then `utf-8` and `utf-16le`


## Installing
```bash
npm install @waiting/base64
```


## Usage

### Encodeing
```ts
import { b64encode, b64FromBuffer } from '@waiting/base64'

b64encode('A') === 'QQ=='
b64encode('𠮷') === b64encode('\uD842\uDFB7') === b64encode('\u{20BB7}') // '8KCutw=='
b64encode('schöne') === 'c2Now7ZuZQ=='
// bigint
b64encode(1n) === b64encode(1) // 'MQ=='

const u8arr = Uint8Array.from([0xe4, 0xb8, 0xad, 0xe6, 0x96, 0x87])
b64FromBuffer(u8arr) === b64encode('中文')  // '5Lit5paH'
```


### Decoding
```ts
import { b64decode } from '@waiting/base64'

b64decode('MQ==') === '1'
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


## Demos
- [Browser](https://github.com/waitingsong/base64/blob/master/test_browser/)
- [Node.js](https://github.com/waitingsong/base64/blob/master/test/)


## License
[MIT](LICENSE)


### Languages
- [English](README.md)
- [中文](README.zh-CN.md)
