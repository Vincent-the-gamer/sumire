<div align="center">
    <h1>Sumire 堇</h1>
    <p>Picture sources collection.</p>
</div>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

> [!NOTE]
> Under construction.

## Supported Websites

- [yande.re](https://yande.re)

and more soon.

## Installation
```shell
pnpm i @vince-gamer/sumire
```

## Usage

Here are some of examples:

### Examples

yande.re:

**Types**:
```ts
export interface SumireConfig {
    proxy?: {
        protocol: string,
        host: string,
        port: number
    },
    auth?: {
        username: string,
        password: string
    }
    r18?: boolean
}

export interface Params {
    tags?: string,  // search keywords
    limit?: number, // number of pictures per search
    login?: string,  // if you have an account of yande.re
    password_hash?: string,  // if you have an account of yande.re
    api_version?: number,  // api_version, default 2
    config?: SumireConfig  // configuration: proxy, r18 and etc.
}
```

**Function:**
```ts
import { yandere } from "@vince-gamer/sumire"

const a = await yandere({
    tags: "persona",
    config: {
        proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 7890
        },
        r18: true
    }
})

console.log(a)
```

## License

[MIT](./LICENSE) License © 2025-PRESENT [Vincent-the-gamer](https://github.com/Vincent-the-gamer)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@vince-gamer/sumire?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@vince-gamer/sumire
[npm-downloads-src]: https://img.shields.io/npm/dm/@vince-gamer/sumire?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@vince-gamer/sumire
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@vince-gamer/sumire?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@vince-gamer/sumire
[license-src]: https://img.shields.io/github/license/Vincent-the-gamer/@vince-gamer/sumire.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Vincent-the-gamer/@vince-gamer/sumire/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@vince-gamer/sumire
