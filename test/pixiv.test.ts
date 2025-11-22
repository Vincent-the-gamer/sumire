import type { PixivResponse } from '../src'
import { pixivDiscovery, pixivFollowingSource, pixivIllust, pixivUserProfile } from '../src/core/pixiv'

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

async function getUserProfile() {
  return await pixivUserProfile('120227846', {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890,
    },
  })
}

async function getFollowingSource() {
  return await pixivFollowingSource({
    userId: "114104704",
    offset: 0,
    limit: 3,
    rest: "show"
  },
  {
    proxy: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7890,
    },
    pixiv: {
      phpSessId: "114104704_uOsEFSeEc0Bq6fnHafMVUMrLxgh0jABe"
    }
  })
}

const a = await getFollowingSource()

console.log(
  JSON.stringify(a)
)