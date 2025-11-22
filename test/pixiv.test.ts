import type { PixivResponse } from '../src'
import { pixivDiscovery, pixivIllust } from '../src/core/pixiv'

async function getDiscovery(): Promise<PixivResponse | null> {
  return await pixivDiscovery(
    {
      tags: 'persona',
      limit: 5,
    },
    {
      proxy: {
        protocol: 'http',
        host: '127.0.0.1',
        port: 7890,
      },
      pixiv: {
        mode: 'r18',
      },
    },
  )
}

async function getIllust(): Promise<Record<string, any> | null> {
  return await pixivIllust('129887775', {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890,
    },
    pixiv: {
      mirror: 'i.yuki.sh',
    },
  })
}

const illust = await getIllust()

console.log(
  JSON.stringify(illust),
)
