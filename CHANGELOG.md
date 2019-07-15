# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.2.9](https://github.com/waitingsong/base64/compare/v4.2.8...v4.2.9) (2019-07-15)


### Tests

* for '\u{10121}' ([fb4ab93](https://github.com/waitingsong/base64/commit/fb4ab93))



### [4.2.8](https://github.com/waitingsong/base64/compare/v4.2.6...v4.2.8) (2019-06-15)


### Tests

* update log ([ebffed1](https://github.com/waitingsong/base64/commit/ebffed1))
* **browser:** add 30_helper.test.ts ([13a8844](https://github.com/waitingsong/base64/commit/13a8844))
* **browser:** add 40_browser-textencoder-polyfill.test.ts, and skipped ([6e2eb21](https://github.com/waitingsong/base64/commit/6e2eb21))



### [4.2.6](https://github.com/waitingsong/base64/compare/v4.2.5...v4.2.6) (2019-06-14)


### Tests

* update cased of parseTextEncoder(), parseTextDecoder() ([1e2d625](https://github.com/waitingsong/base64/commit/1e2d625))



### [4.2.5](https://github.com/waitingsong/base64/compare/v4.2.4...v4.2.5) (2019-06-14)


### Tests

* validateDecoder() ([2f10583](https://github.com/waitingsong/base64/commit/2f10583))



### [4.2.4](https://github.com/waitingsong/base64/compare/v4.2.3...v4.2.4) (2019-06-13)



### [4.2.3](https://github.com/waitingsong/base64/compare/v4.2.2...v4.2.3) (2019-06-13)



### [4.2.2](https://github.com/waitingsong/base64/compare/v4.2.1...v4.2.2) (2019-06-13)



### [4.2.1](https://github.com/waitingsong/base64/compare/v4.2.0...v4.2.1) (2019-06-13)


### Build System

* use base64 as name of package for building ESM ([db96fe8](https://github.com/waitingsong/base64/commit/db96fe8))


### Tests

* **browser:** polyfill for ie11 ([5976675](https://github.com/waitingsong/base64/commit/5976675))



## [4.2.0](https://github.com/waitingsong/base64/compare/v4.1.0...v4.2.0) (2019-06-13)


### Features

* b64urlFromBuffer() ([0652596](https://github.com/waitingsong/base64/commit/0652596))



## [4.1.0](https://github.com/waitingsong/base64/compare/v4.0.1...v4.1.0) (2019-06-12)


### Features

* b64fromURLSafe() Convert URL-safe base64 string to base64 string ([cf267ff](https://github.com/waitingsong/base64/commit/cf267ff))
* b64urlDecode() Decode URL-safe base64 to original string ([a30ba9d](https://github.com/waitingsong/base64/commit/a30ba9d))
* b64urlEncode() Encode to URL-safe base64 ([0129fc7](https://github.com/waitingsong/base64/commit/0129fc7))



### [4.0.1](https://github.com/waitingsong/base64/compare/v4.0.0...v4.0.1) (2019-06-12)



## [4.0.0](https://github.com/waitingsong/base64/compare/v3.0.1...v4.0.0) (2019-06-12)


### Bug Fixes

* start should less then end for encodeChunk() ([1da0769](https://github.com/waitingsong/base64/commit/1da0769))


### Features

* b64toURLSafe() convert base64 string to URL-safe string ([fdd0300](https://github.com/waitingsong/base64/commit/fdd0300))
* export testB64(), testB64URL, validB64URLChars() ([5863162](https://github.com/waitingsong/base64/commit/5863162))


### Tests

* for validateB64(), validateB64URL() ([65306d3](https://github.com/waitingsong/base64/commit/65306d3))



### [3.0.1](https://github.com/waitingsong/base64/compare/v3.0.0...v3.0.1) (2019-06-12)



## [3.0.0](https://github.com/waitingsong/base64/compare/v2.2.0...v3.0.0) (2019-06-12)


### Bug Fixes

* error message with getLens() ([7ca94fb](https://github.com/waitingsong/base64/commit/7ca94fb))


### Features

* zero length of base64 not allowed of getLens() ([52e0be1](https://github.com/waitingsong/base64/commit/52e0be1))


### Tests

* fix import name ([a79854f](https://github.com/waitingsong/base64/commit/a79854f))



## [2.2.0](https://github.com/waitingsong/base64/compare/v2.1.0...v2.2.0) (2019-06-11)


### Bug Fixes

* wrong validating function within parseTextDecoder() ([b7db14e](https://github.com/waitingsong/base64/commit/b7db14e))


### Features

* detect ArrayBuffer instance via isArrayBuffer() ([930139a](https://github.com/waitingsong/base64/commit/930139a))
* detect Uint8Array instance via isUint8Array() ([164c6cf](https://github.com/waitingsong/base64/commit/164c6cf))
* validate input value for fromBuffer() ([c5f8a72](https://github.com/waitingsong/base64/commit/c5f8a72))
* validate input value for fromBuffer() ([4ce5c24](https://github.com/waitingsong/base64/commit/4ce5c24))


### Tests

* add 30_helper.test.ts ([9d7ac1b](https://github.com/waitingsong/base64/commit/9d7ac1b))
* add case for encodeChunk() ([f90d3e8](https://github.com/waitingsong/base64/commit/f90d3e8))
* fix import module ([686eb11](https://github.com/waitingsong/base64/commit/686eb11))
* update cases of b64decode() ([8f96c13](https://github.com/waitingsong/base64/commit/8f96c13))



## [2.1.0](https://github.com/waitingsong/base64/compare/v2.0.0...v2.1.0) (2019-06-11)


### Features

* b64byteLength() ([477fe7b](https://github.com/waitingsong/base64/commit/477fe7b))



## [2.0.0](https://github.com/waitingsong/base64/compare/v1.1.0...v2.0.0) (2019-06-11)



## [1.1.0](https://github.com/waitingsong/base64/compare/v1.0.0...v1.1.0) (2019-06-11)


### Features

* b64FromBuffer() encoding from ArrayBuffer or Uint8Array input ([236feda](https://github.com/waitingsong/base64/commit/236feda))



## 1.0.0 (2019-06-11)


### Features

* b64encode() and b64decode() ([09f44c1](https://github.com/waitingsong/base64/commit/09f44c1))
