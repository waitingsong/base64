# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2019-06-11)


### Bug Fixes

* catch test error ([5efe156](https://github.com/waitingsong/base64/commit/5efe156))
* createDir() path resolve under linux ([c6d1274](https://github.com/waitingsong/base64/commit/c6d1274))
* deps, peerDeps might empty ([e3ab52b](https://github.com/waitingsong/base64/commit/e3ab52b))
* error TS1345: An expression of type 'void' cannot be tested for truthiness ([0085713](https://github.com/waitingsong/base64/commit/0085713))
* options not covered within createFile() ([a2ae4e8](https://github.com/waitingsong/base64/commit/a2ae4e8))
* path require parse by normalize() within createDir() ([371a313](https://github.com/waitingsong/base64/commit/371a313))
* revert ts-node to '5.0.1' ([cc83ade](https://github.com/waitingsong/base64/commit/cc83ade))
* rimraf() got "no such file or directory" if unlink a file ([2680611](https://github.com/waitingsong/base64/commit/2680611))
* **tslint:** no-unused-variable rule ([d0ce43a](https://github.com/waitingsong/base64/commit/d0ce43a))
* rimraf() rm folder ([87fe6d5](https://github.com/waitingsong/base64/commit/87fe6d5))
* wrong variable within createFile() ([49ac701](https://github.com/waitingsong/base64/commit/49ac701))


### Build System

* distinct external ([d9a8964](https://github.com/waitingsong/base64/commit/d9a8964))
* npm ignore tsconfig.*.json ([1e3d8ce](https://github.com/waitingsong/base64/commit/1e3d8ce))
* npmignore commitlint.config.js, .editorconfig ([60ba06e](https://github.com/waitingsong/base64/commit/60ba06e))


### Features

* add assertNever() ([6eb9349](https://github.com/waitingsong/base64/commit/6eb9349))
* add assertNeverObb() ([91da144](https://github.com/waitingsong/base64/commit/91da144))
* add isPathAcessible() ([7eb000b](https://github.com/waitingsong/base64/commit/7eb000b))
* add lib/shared.ts ([6915fb1](https://github.com/waitingsong/base64/commit/6915fb1))
* add logger() ([5d603c5](https://github.com/waitingsong/base64/commit/5d603c5))
* add Observable functions ([c9364db](https://github.com/waitingsong/base64/commit/c9364db))
* b64encode() and b64decode() ([09f44c1](https://github.com/waitingsong/base64/commit/09f44c1))
* change logger() to accept more args ([b5d0ca4](https://github.com/waitingsong/base64/commit/b5d0ca4))
* compile output bundle file without minify ([0b78ba1](https://github.com/waitingsong/base64/commit/0b78ba1))
* do isPathAccessible() first within isDirFileExists() ([9ddae98](https://github.com/waitingsong/base64/commit/9ddae98))
* export basename() from shared ([7e93fd7](https://github.com/waitingsong/base64/commit/7e93fd7))
* export dirname() ([0db2a50](https://github.com/waitingsong/base64/commit/0db2a50))
* export native assert() ([683cea8](https://github.com/waitingsong/base64/commit/683cea8))
* export os.tmpdir() ([1cc1f3e](https://github.com/waitingsong/base64/commit/1cc1f3e))
* export rmdirAsync() and rimraf() ([4ef519a](https://github.com/waitingsong/base64/commit/4ef519a))
* export statAsync ([c832590](https://github.com/waitingsong/base64/commit/c832590))
* output esm.min.js ([f6c729f](https://github.com/waitingsong/base64/commit/f6c729f))
* parse peerDependencies as external ([dfdd73e](https://github.com/waitingsong/base64/commit/dfdd73e))
* parseUMDName() ([6e7164f](https://github.com/waitingsong/base64/commit/6e7164f))
* remove log() and logger() ([27e1e29](https://github.com/waitingsong/base64/commit/27e1e29))


### Tests

*  npm install rollup globally ([f603f5d](https://github.com/waitingsong/base64/commit/f603f5d))
* add entry of Karma Chrome for debugging in chrome ([79683b2](https://github.com/waitingsong/base64/commit/79683b2))
* add karma.sauce.conf.js ([05beeb3](https://github.com/waitingsong/base64/commit/05beeb3))
* add tslint.json for test. set rule of no-console off ([c4699eb](https://github.com/waitingsong/base64/commit/c4699eb))
* add x86 for appveyor ([9e7812a](https://github.com/waitingsong/base64/commit/9e7812a))
* browser ([3aee9df](https://github.com/waitingsong/base64/commit/3aee9df))
* change nodejs version from 9 to 10 ([5f1fb27](https://github.com/waitingsong/base64/commit/5f1fb27))
* fix config ([d7d87c2](https://github.com/waitingsong/base64/commit/d7d87c2))
* fix mocha.opts ([1d030c6](https://github.com/waitingsong/base64/commit/1d030c6))
* increase timeout to 60sec ([364ea7b](https://github.com/waitingsong/base64/commit/364ea7b))
* **browser:** fix safari config ([e39f8aa](https://github.com/waitingsong/base64/commit/e39f8aa))
* update karma.sauce.conf.js ([9709a39](https://github.com/waitingsong/base64/commit/9709a39))
* **browser:** update config ([563d826](https://github.com/waitingsong/base64/commit/563d826))
* Should createDir() works with odd path ([6d0fb07](https://github.com/waitingsong/base64/commit/6d0fb07))
* **browser:** update edge ([07bfae9](https://github.com/waitingsong/base64/commit/07bfae9))
* ingore line within createDir() ([b23e115](https://github.com/waitingsong/base64/commit/b23e115))
* isPathAcessible() ([0632e15](https://github.com/waitingsong/base64/commit/0632e15))
* nyc ignore test* ([4d04b5a](https://github.com/waitingsong/base64/commit/4d04b5a))
* update ([af68afe](https://github.com/waitingsong/base64/commit/af68afe))
* update config ([5dfeb64](https://github.com/waitingsong/base64/commit/5dfeb64))
* update karma.sauce.conf.js ([242e07d](https://github.com/waitingsong/base64/commit/242e07d))
* update karma.sauce.conf.js ([829b36d](https://github.com/waitingsong/base64/commit/829b36d))
* update karma.sauce.conf.js ([a575961](https://github.com/waitingsong/base64/commit/a575961))
* **karma:** update config for es2016 ([d692bb3](https://github.com/waitingsong/base64/commit/d692bb3))
* update target to 'ESNEXT' ([f8fcfdb](https://github.com/waitingsong/base64/commit/f8fcfdb))
