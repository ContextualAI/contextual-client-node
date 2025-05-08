# Changelog

## 0.6.0 (2025-05-08)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.5.0...v0.6.0)

### Features

* **api:** update via SDK Studio ([d6ff47c](https://github.com/ContextualAI/contextual-client-node/commit/d6ff47c58dd8b0cb4f142951d0e3043b8487bcdd))
* **api:** update via SDK Studio ([fd67b96](https://github.com/ContextualAI/contextual-client-node/commit/fd67b96723a0234588545d4b45dfbb939c8de7bf))
* **api:** update via SDK Studio ([c6635f9](https://github.com/ContextualAI/contextual-client-node/commit/c6635f95de77157c6fa97545bd9b6a215ae56bab))
* **api:** update via SDK Studio ([#40](https://github.com/ContextualAI/contextual-client-node/issues/40)) ([67be5c7](https://github.com/ContextualAI/contextual-client-node/commit/67be5c7f62052e4d8d4ca960acf5d741f626103e))
* **api:** update via SDK Studio ([#42](https://github.com/ContextualAI/contextual-client-node/issues/42)) ([a20be25](https://github.com/ContextualAI/contextual-client-node/commit/a20be255eccdd3d73b8b82215ed1bb4f5ca2e010))
* **api:** update via SDK Studio ([#43](https://github.com/ContextualAI/contextual-client-node/issues/43)) ([14c74c1](https://github.com/ContextualAI/contextual-client-node/commit/14c74c15ebcef0871e7325453eb1ed02d12a7306))
* **api:** update via SDK Studio ([#44](https://github.com/ContextualAI/contextual-client-node/issues/44)) ([94cf64d](https://github.com/ContextualAI/contextual-client-node/commit/94cf64d933f96e05b70757122a22871109190014))
* **api:** update via SDK Studio ([#45](https://github.com/ContextualAI/contextual-client-node/issues/45)) ([6f38963](https://github.com/ContextualAI/contextual-client-node/commit/6f3896383295cdfbdec9a65a5a470abf3379410c))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#54](https://github.com/ContextualAI/contextual-client-node/issues/54)) ([bd2f8ab](https://github.com/ContextualAI/contextual-client-node/commit/bd2f8ab3d2cc796201c530c5e85e4485ac337506))
* avoid type error in certain environments ([#50](https://github.com/ContextualAI/contextual-client-node/issues/50)) ([91cd06a](https://github.com/ContextualAI/contextual-client-node/commit/91cd06af830f4ef13bda0cea76908afaeb03ec19))
* **client:** send `X-Stainless-Timeout` in seconds ([#52](https://github.com/ContextualAI/contextual-client-node/issues/52)) ([94fba4c](https://github.com/ContextualAI/contextual-client-node/commit/94fba4c76050b7471c7dbb50391cd8196278cac2))
* **exports:** ensure resource imports don't require /index ([#47](https://github.com/ContextualAI/contextual-client-node/issues/47)) ([e530478](https://github.com/ContextualAI/contextual-client-node/commit/e530478fe8da3337643d66f4eb6cb98fb715cc16))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#51](https://github.com/ContextualAI/contextual-client-node/issues/51)) ([7f0bfdd](https://github.com/ContextualAI/contextual-client-node/commit/7f0bfddede9817da316a849511cfa112191c8bef))
* **mcp:** remove unused tools.ts ([#55](https://github.com/ContextualAI/contextual-client-node/issues/55)) ([119ec6f](https://github.com/ContextualAI/contextual-client-node/commit/119ec6fb6eff339fa9dd08481d527ca46674485f))


### Chores

* **ci:** add timeout thresholds for CI jobs ([b6b2a07](https://github.com/ContextualAI/contextual-client-node/commit/b6b2a07f2bd01f34336c5a4964efe4a07a004f68))
* **ci:** bump node version for release workflows ([5d04e11](https://github.com/ContextualAI/contextual-client-node/commit/5d04e11485d0379d5ff7db1dedb7f25c26db4498))
* **ci:** only use depot for staging repos ([873ba2f](https://github.com/ContextualAI/contextual-client-node/commit/873ba2f355fca96db4bcbcad1ef92e0597fa9bd3))
* **client:** minor internal fixes ([321469a](https://github.com/ContextualAI/contextual-client-node/commit/321469aec2485d12c95fdf34308ed61714d3cdfd))
* **exports:** cleaner resource index imports ([#48](https://github.com/ContextualAI/contextual-client-node/issues/48)) ([b204f8a](https://github.com/ContextualAI/contextual-client-node/commit/b204f8a909d95f11e4cf795d68a96b7eaf362c67))
* **exports:** stop using path fallbacks ([#49](https://github.com/ContextualAI/contextual-client-node/issues/49)) ([b0bed50](https://github.com/ContextualAI/contextual-client-node/commit/b0bed50ab202f8b80636db662c063a9094c3de16))
* **internal:** add aliases for Record and Array ([#53](https://github.com/ContextualAI/contextual-client-node/issues/53)) ([3fcab5f](https://github.com/ContextualAI/contextual-client-node/commit/3fcab5f1e451d41b1c3c3f399fe170c3fccb895a))
* **internal:** codegen related update ([f3cadb2](https://github.com/ContextualAI/contextual-client-node/commit/f3cadb2de612e13ed00fb7971af8d4676b11db33))
* **internal:** reduce CI branch coverage ([82a1e3f](https://github.com/ContextualAI/contextual-client-node/commit/82a1e3f2cd28208a6de65145a62614a16b25c5da))
* **internal:** remove extra empty newlines ([#46](https://github.com/ContextualAI/contextual-client-node/issues/46)) ([bf1f16c](https://github.com/ContextualAI/contextual-client-node/commit/bf1f16c174c4d6caf5d120cdfe4da281a2398a8a))
* **internal:** upload builds and expand CI branch coverage ([ba02a4a](https://github.com/ContextualAI/contextual-client-node/commit/ba02a4a584975a100a61610e0cb819a7f345f01f))


### Documentation

* **readme:** fix typo ([3ab3596](https://github.com/ContextualAI/contextual-client-node/commit/3ab3596376577889a370fc1b2c9a98b1e71b3bce))

## 0.5.0 (2025-03-11)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.4.0...v0.5.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#35](https://github.com/ContextualAI/contextual-client-node/issues/35)) ([bb0faca](https://github.com/ContextualAI/contextual-client-node/commit/bb0faca1da1cc716197e02d3a5e9b6614f2204b0))
* **api:** update via SDK Studio ([#37](https://github.com/ContextualAI/contextual-client-node/issues/37)) ([1cc7907](https://github.com/ContextualAI/contextual-client-node/commit/1cc7907b119cb40734c3da6040feb6b999e70191))
* **api:** update via SDK Studio ([#38](https://github.com/ContextualAI/contextual-client-node/issues/38)) ([b23a2e2](https://github.com/ContextualAI/contextual-client-node/commit/b23a2e2fa6bfcf37b61754eeb134d165c61e8d9d))
* **client:** accept RFC6838 JSON content types ([#36](https://github.com/ContextualAI/contextual-client-node/issues/36)) ([5178d1d](https://github.com/ContextualAI/contextual-client-node/commit/5178d1ddbc4c67f035113faafcc292c0dc05f014))


### Chores

* **internal:** codegen related update ([#33](https://github.com/ContextualAI/contextual-client-node/issues/33)) ([7608b02](https://github.com/ContextualAI/contextual-client-node/commit/7608b02fa3f51ef345da11be72b90fba5018ed68))

## 0.4.0 (2025-03-03)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.3.0...v0.4.0)

### Features

* **api:** update via SDK Studio ([#31](https://github.com/ContextualAI/contextual-client-node/issues/31)) ([4ba5a46](https://github.com/ContextualAI/contextual-client-node/commit/4ba5a465a8201253d49b85cc8befd22f8ac721de))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#28](https://github.com/ContextualAI/contextual-client-node/issues/28)) ([ffbd533](https://github.com/ContextualAI/contextual-client-node/commit/ffbd5334f8d85c61dbce453e2fe86f0d4260621c))

## 0.3.0 (2025-02-26)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.2.0...v0.3.0)

### Features

* **api:** update via SDK Studio ([#20](https://github.com/ContextualAI/contextual-client-node/issues/20)) ([ca5487d](https://github.com/ContextualAI/contextual-client-node/commit/ca5487db83e2aea688b31413e9c594ff3f463f63))
* **api:** update via SDK Studio ([#25](https://github.com/ContextualAI/contextual-client-node/issues/25)) ([366e7bc](https://github.com/ContextualAI/contextual-client-node/commit/366e7bc974e79509e2627d764523f5156ff6d5bb))
* **api:** update via SDK Studio ([#26](https://github.com/ContextualAI/contextual-client-node/issues/26)) ([87470ef](https://github.com/ContextualAI/contextual-client-node/commit/87470ef70c3a84cf8873f2cac7f705305fd9dde8))


### Bug Fixes

* **client:** fix export map for index exports ([#22](https://github.com/ContextualAI/contextual-client-node/issues/22)) ([9775826](https://github.com/ContextualAI/contextual-client-node/commit/977582624e283aac91c128e9b0f004e2e40f3562))


### Chores

* **internal:** codegen related update ([#23](https://github.com/ContextualAI/contextual-client-node/issues/23)) ([1643590](https://github.com/ContextualAI/contextual-client-node/commit/16435904607828ebae0559d90397c7a15dca2619))
* **internal:** fix devcontainers setup ([#24](https://github.com/ContextualAI/contextual-client-node/issues/24)) ([ecf1652](https://github.com/ContextualAI/contextual-client-node/commit/ecf16521a46c1265811ca2d66cad02b172eda636))

## 0.2.0 (2025-02-08)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.1.0...v0.2.0)

### Features

* **api:** update via SDK Studio ([#15](https://github.com/ContextualAI/contextual-client-node/issues/15)) ([6aaf723](https://github.com/ContextualAI/contextual-client-node/commit/6aaf723c236fa90c113f89e3c455c071fdf311e4))
* **api:** update via SDK Studio ([#16](https://github.com/ContextualAI/contextual-client-node/issues/16)) ([0cfb143](https://github.com/ContextualAI/contextual-client-node/commit/0cfb143e6a706365c1ea6d21404e1d3dfdca87eb))
* **api:** update via SDK Studio ([#18](https://github.com/ContextualAI/contextual-client-node/issues/18)) ([54f5551](https://github.com/ContextualAI/contextual-client-node/commit/54f55516820f04498db0f45997539d9fa142f589))
* **client:** send `X-Stainless-Timeout` header ([#17](https://github.com/ContextualAI/contextual-client-node/issues/17)) ([6cb5614](https://github.com/ContextualAI/contextual-client-node/commit/6cb56149556ce93fae414e40e23114229929f8ed))


### Chores

* **internal:** codegen related update ([#11](https://github.com/ContextualAI/contextual-client-node/issues/11)) ([30253b7](https://github.com/ContextualAI/contextual-client-node/commit/30253b751d480a41574804fa080a02449c37936a))
* **internal:** codegen related update ([#13](https://github.com/ContextualAI/contextual-client-node/issues/13)) ([69a063a](https://github.com/ContextualAI/contextual-client-node/commit/69a063afb19f3739fc877ddbc90bf3c8da826d48))
* **internal:** codegen related update ([#14](https://github.com/ContextualAI/contextual-client-node/issues/14)) ([ed84da5](https://github.com/ContextualAI/contextual-client-node/commit/ed84da5bd3a9085f5d9bed012112d8ef386a9f64))

## 0.1.0 (2025-01-15)

Full Changelog: [v0.1.0-alpha.2...v0.1.0](https://github.com/ContextualAI/contextual-client-node/compare/v0.1.0-alpha.2...v0.1.0)

### Features

* **api:** update via SDK Studio ([#6](https://github.com/ContextualAI/contextual-client-node/issues/6)) ([c4716b9](https://github.com/ContextualAI/contextual-client-node/commit/c4716b9941567e8194e7a423d3964bb10f9b0eb8))
* **api:** update via SDK Studio ([#8](https://github.com/ContextualAI/contextual-client-node/issues/8)) ([b0ff25d](https://github.com/ContextualAI/contextual-client-node/commit/b0ff25db12010d4b6e2b8adf1dc08b2c03041499))
* **api:** update via SDK Studio ([#9](https://github.com/ContextualAI/contextual-client-node/issues/9)) ([a2cb696](https://github.com/ContextualAI/contextual-client-node/commit/a2cb696735d01fe00508f2d6d5dfd40d30bebb9f))

## 0.1.0-alpha.2 (2025-01-14)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/ContextualAI/contextual-client-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* chore: update README. ([0b9ddd2](https://github.com/ContextualAI/contextual-client-node/commit/0b9ddd2eaf0ca3e0aad489131c5a803c64d922b8))

## 0.1.0-alpha.1 (2025-01-14)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/ContextualAI/contextual-client-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([859f794](https://github.com/ContextualAI/contextual-client-node/commit/859f794e36d64d296e1d9b09b3c7aea256767c88))
* **api:** update via SDK Studio ([3f5ebec](https://github.com/ContextualAI/contextual-client-node/commit/3f5ebec7eae1555a24b32c6e4d158a9efaf42b7b))
* **api:** update via SDK Studio ([2409214](https://github.com/ContextualAI/contextual-client-node/commit/2409214d5e93518ac45f8a484dbeab86c16e0b4f))
* **api:** update via SDK Studio ([958d294](https://github.com/ContextualAI/contextual-client-node/commit/958d2945e04eb69c0a8037fc88d419ae132df6db))
* **api:** update via SDK Studio ([c36235e](https://github.com/ContextualAI/contextual-client-node/commit/c36235ef4644e9db0acccd3f304af1643462d120))
* **api:** update via SDK Studio ([80b9dc4](https://github.com/ContextualAI/contextual-client-node/commit/80b9dc4d85c75b9530289df88f52e38ccb8f5d5f))
* **api:** update via SDK Studio ([365b895](https://github.com/ContextualAI/contextual-client-node/commit/365b895b298e35a0a6f5d41552057607db717abb))
* **api:** update via SDK Studio ([dd86bdb](https://github.com/ContextualAI/contextual-client-node/commit/dd86bdbecece24432c3b3ba5429f1b37f3271e0c))
* **api:** update via SDK Studio ([bef33fb](https://github.com/ContextualAI/contextual-client-node/commit/bef33fb5d5c12dfe0b3fc5801ef45a288677ff43))
* **api:** update via SDK Studio ([5404487](https://github.com/ContextualAI/contextual-client-node/commit/540448724aea0dda87f782ab94a9cb514e0d392c))
* **api:** update via SDK Studio ([fed7da5](https://github.com/ContextualAI/contextual-client-node/commit/fed7da5f422ee85b0cb5b06b5e037bf9f7d72888))
* **api:** update via SDK Studio ([b9e01f1](https://github.com/ContextualAI/contextual-client-node/commit/b9e01f10cb936b7929acb4c1d8fd61de64e05da1))
* **api:** update via SDK Studio ([4f8028a](https://github.com/ContextualAI/contextual-client-node/commit/4f8028ad0931a4d1004a25434378493efacbe1ec))
* **api:** update via SDK Studio ([f7fecc3](https://github.com/ContextualAI/contextual-client-node/commit/f7fecc3b1aa85173d1a6c940243d6a4a93137b21))
* **api:** update via SDK Studio ([59b704d](https://github.com/ContextualAI/contextual-client-node/commit/59b704d41b786e7a19251cb4df01da725123302e))
* **api:** update via SDK Studio ([9bbbb9c](https://github.com/ContextualAI/contextual-client-node/commit/9bbbb9ca39a31fd95cebd558a5472622782eef1f))
* **api:** update via SDK Studio ([eb9c39a](https://github.com/ContextualAI/contextual-client-node/commit/eb9c39a298852d1dc35f7f98d72649e3744727a1))
* **api:** update via SDK Studio ([f933236](https://github.com/ContextualAI/contextual-client-node/commit/f93323683d9bb0ea1ed06fe277d3dd3edc4da67b))
* **api:** update via SDK Studio ([e75b837](https://github.com/ContextualAI/contextual-client-node/commit/e75b837365efa9356248d66fac81fcb3c98a3fa8))
* **api:** update via SDK Studio ([d656da4](https://github.com/ContextualAI/contextual-client-node/commit/d656da4210576812e4cc3f934f4fde171ae81ef7))
* **api:** update via SDK Studio ([de1bbae](https://github.com/ContextualAI/contextual-client-node/commit/de1bbaefdca63dc8586fb80ed72d7746476f7edd))
* **api:** update via SDK Studio ([066eb3e](https://github.com/ContextualAI/contextual-client-node/commit/066eb3e456d893aa739054ffc07e439167b35a17))


### Bug Fixes

* **client:** normalize method ([9ee7f8d](https://github.com/ContextualAI/contextual-client-node/commit/9ee7f8d4728115e50762a34dd8ab788bbc3069c6))
* use custom prism-cli. ([7168f5c](https://github.com/ContextualAI/contextual-client-node/commit/7168f5cc9234b82eb1825e3e88a9e3e55f3d176e))


### Chores

* go live ([#1](https://github.com/ContextualAI/contextual-client-node/issues/1)) ([0db50ed](https://github.com/ContextualAI/contextual-client-node/commit/0db50edf4c393e6b5554f8b121358833dc5cb5d9))
* **internal:** codegen related update ([9836888](https://github.com/ContextualAI/contextual-client-node/commit/983688845cf42d4e7674e2139303f4a91018e1d9))
* **internal:** codegen related update ([f6bae2e](https://github.com/ContextualAI/contextual-client-node/commit/f6bae2e33ffb7ba15bf46303cc4511759752e9b4))
* **internal:** codegen related update ([2c0f814](https://github.com/ContextualAI/contextual-client-node/commit/2c0f81417876c05b0f0774a654f530591669752e))
* **internal:** codegen related update ([f928e55](https://github.com/ContextualAI/contextual-client-node/commit/f928e558cda65c37cf7c63b27bb8b23ba3857e92))
* **internal:** codegen related update ([9d8dba9](https://github.com/ContextualAI/contextual-client-node/commit/9d8dba9824b671065d7cc94593e0d3a47126eeac))
* **internal:** codegen related update ([e0b2783](https://github.com/ContextualAI/contextual-client-node/commit/e0b278360b1bd70635cfc420b00767837f30a97b))
* **internal:** fix some typos ([8e8312b](https://github.com/ContextualAI/contextual-client-node/commit/8e8312bb18da1f049b278e7e8212a2a5ed3e6305))
* **internal:** fix some typos ([027e04c](https://github.com/ContextualAI/contextual-client-node/commit/027e04cd90f35ba523d96532bc7aef3d8b74863d))
* **internal:** remove unnecessary getRequestClient function ([3720bda](https://github.com/ContextualAI/contextual-client-node/commit/3720bda521763d0081f0adc38e144d5258cd06c2))
* **internal:** update isAbsoluteURL ([5e163d5](https://github.com/ContextualAI/contextual-client-node/commit/5e163d5970661a1fb73973e78b2b19efe189c33b))


### Documentation

* minor formatting changes ([d2ee8a9](https://github.com/ContextualAI/contextual-client-node/commit/d2ee8a969af712d4c78dbe0de80b7d57579c7513))
