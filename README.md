<div align="center">
    <img src=".github/sumire.png" style="height: 105px;" />
    <h1>Sumire 堇</h1>
    <p>Picture sources collection.</p>
</div>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Supported Websites

- [yande.re](https://yande.re)
- [pixiv.net](https://www.pixiv.net/)

and more soon.

## Installation
```shell
npm i @vince-gamer/sumire
```

## Usage

Here are some of examples:

### Examples

Every main function like `yandere()`, `pixivIllust()` uses sumire config.

Sumire universal config type:

```ts
export interface SumireConfig {
  proxy?: {
    protocol: string
    host: string
    port: number
  }
  yandere?: {
    auth?: {
      username?: string
      password?: string
    }
    r18?: boolean
  }
  pixiv?: {
    mode?: 'r18' | 'safe' | 'all'
    phpSessId?: string
    mirror?: string // mirror of i.pximg.net, which will be blocked by referer policy.
  }
}
```

#### yande.re

**Types**:
```ts
export interface Params {
  tags?: string // search keywords
  limit?: number // number of pictures per search
  login?: string // don't pass this value, it will be auto filled if config.auth exists.
  password_hash?: string // don't pass this value, it will be auto filled if config.auth exists.
  api_version?: number // api_version, default 2
}
```

**Function:**
```ts
import { yandere } from '@vince-gamer/sumire'

const a = await yandere(
  {
    tags: 'persona'
  },
  {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890
    },
    yandere: {
      r18: true
    }
  }
)

console.log(a)
```

#### Pixiv

> [!IMPORTANT]
> If you get 404 on request, please login your pixiv account, then add phpSessId config in `config.pixiv`

**Types**:
```ts
export interface Params {
  tags?: string // search keywords
  limit?: number // number of pictures per search
  login?: string // don't pass this value, it will be auto filled if config.auth exists.
  password_hash?: string // don't pass this value, it will be auto filled if config.auth exists.
  api_version?: number // api_version, default 2
}
```

**Function:**
```ts
import { pixivDiscovery, pixivIllust } from '@vince-gamer/sumire'

// Search illusts with tags and mode
const a = await pixivDiscovery(
  {
    tags: 'persona',
    limit: 5,
  },
  {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890
    },
    pixiv: {
      mode: 'r18',
      phpSessId: 'xxxx' // pass your phpSessId in cookie if you encounter authorization issue.
    }
  }
)

// get the original picture(full resolution) with illust id
const b = await pixivIllust('129887775', {
  proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 7890
  },
  pixiv: {
    phpSessId: 'xxxx' // pass your phpSessId in cookie if you encounter authorization issue.
  }
})

console.log(b)
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
