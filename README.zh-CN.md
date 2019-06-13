# Base64

Base64 编码、解码 JS 实现，支持长青浏览器和 Node.js，基于 [base64-js](https://www.npmjs.com/package/base64-js) 。
同时支持 [URL安全的base64](https://zh.wikipedia.org/zh-hans/Base64#%E5%9C%A8URL%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8)

[![Version](https://img.shields.io/npm/v/@waiting/base64.svg)](https://www.npmjs.com/package/@waiting/base64)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/waitingsong/base64.svg?branch=master)](https://travis-ci.org/waitingsong/base64)
[![Build status](https://ci.appveyor.com/api/projects/status/wp4a72sj7bc5ao3t/branch/master?svg=true)](https://ci.appveyor.com/project/waitingsong/base64/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/waitingsong/base64/badge.svg?branch=master)](https://coveralls.io/github/waitingsong/base64?branch=master)


## 特色
- 编码输入参数支持 `string`, `number` 和 [`bigint`](https://github.com/tc39/proposal-bigint) 类型
- 编码输入参数支持 `ArrayBuffer` 或者 `Uint8Array`
- 编码解码的实现： 浏览器下通过 `TextEncoder`/`TextDecoder`，Node.js 下通过 `Buffer`


## 浏览器需求
- 支持 [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder#Browser_compatibility) 和
  [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder#Browser_compatibility) 功能


## Node.js 需求
- 对 `bigint` 进行 base64 编码需要版本 v10.4.0 及以上
- 若 base64 解码输出 `utf-8` and `utf-16le` 之外的编码需要安装 [ICU](https://nodejs.org/api/util.html#util_whatwg_supported_encodings) 


## 安装
```bash
npm install @waiting/base64
```

## 使用

### 编码
```ts
import { b64encode, b64fromBuffer, b64urlEncode } from '@waiting/base64'

b64encode('A') === 'QQ=='
b64encode('𠮷') === b64encode('\uD842\uDFB7') === b64encode('\u{20BB7}') // '8KCutw=='
b64encode('schöne') === 'c2Now7ZuZQ=='
// bigint
b64encode(1n) === b64encode(1) // 'MQ=='

const u8arr = Uint8Array.from([0xe4, 0xb8, 0xad, 0xe6, 0x96, 0x87])
b64fromBuffer(u8arr) === b64encode('中文')  // '5Lit5paH'

// URL-safe
b64urlEncode('A') === 'QQ'
```

### 解码
```ts
import { b64decode, b64urlDecode } from '@waiting/base64'

b64decode('MQ==') === '1'
b64urlDecode('MQ') === '1'
```

### 转换
```ts
import { b64toURLSafe, b64fromURLSafe } from '@waiting/base64'

// base64 -> URL-safe base64
b64toURLSafe('QQ==') === 'QQ'
b64toURLSafe('5Lit5paH5rWL6K+V') === '5Lit5paH5rWL6K-V'

// URL-safe base64 -> base64
b64fromURLSafe('QQ') === 'QQ=='
b64fromURLSafe('0J_RgNC40LLQtdGCLCDQvNC40YAh') === '0J/RgNC40LLQtdGCLCDQvNC40YAh'
```


## 测试
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
