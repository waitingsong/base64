# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
