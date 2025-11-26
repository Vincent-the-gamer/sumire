import type { PixivFollowerRequest, PixivFollowingRequest, PixivIllustResponse, PixivResponse, SumireConfig } from '../types'
import axios from 'axios'
import { logger } from '../utils/logger'
import { useRandomUserAgent } from '../utils/userAgent'

interface Params {
  tags?: string
  mode?: string
  limit?: number
}

export async function pixivDiscovery(params: Params, config?: SumireConfig) {
  const discoveryBase = 'https://www.pixiv.net/ajax/illust/discovery'

  const tags = params.tags || ''

  if (tags) {
    params.tags = tags
  }

  if (config?.pixiv?.mode) {
    params.mode = config.pixiv.mode
  }

  try {
    const { data } = await axios({
      url: discoveryBase,
      method: 'get',
      params,
      proxy: config?.proxy,
      headers: {
        'User-Agent': useRandomUserAgent(),
        'Referer': 'https://www.pixiv.net/',
        'Cookie': config?.pixiv?.phpSessId ? `PHPSESSID=${config.pixiv.phpSessId}` : undefined,
      },
    })

    const respData: PixivResponse = data

    return respData
  }
  catch (e) {
    logger.error(`Fetch Pixiv Discovery metadata failed!${e}`)
    return null
  }
}

export async function pixivIllust(artworkId: string, config?: SumireConfig) {
  const illustBaseUrl = `https://www.pixiv.net/ajax/illust/${artworkId}/pages`

  try {
    const { data } = await axios({
      url: illustBaseUrl,
      method: 'get',
      params: {},
      proxy: config?.proxy,
      headers: {
        'User-Agent': useRandomUserAgent(),
        'Referer': 'https://www.pixiv.net/',
        'Cookie': config?.pixiv?.phpSessId ? `PHPSESSID=${config.pixiv.phpSessId}` : undefined,
      },
    })

    const respData: Record<string, any> = data as PixivIllustResponse

    const urls: Record<string, any> = respData.body[0].urls

    if (config?.pixiv?.mirror) {
      for (const [key, value] of Object.entries(urls)) {
        urls[key] = value.replace('i.pximg.net', config.pixiv.mirror)
      }
    }

    respData.body[0].urls = urls

    return respData
  }
  catch (e) {
    logger.error(`Connot fetch original picture link: ${e}`)
    return null
  }
}

export async function pixivUserProfile(userId: string, config?: SumireConfig): Promise<Record<string, any>> {
  const userProfileBase = `https://www.pixiv.net/ajax/user/${userId}/profile/all`

  const { data } = await axios({
    url: userProfileBase,
    method: 'get',
    params: {},
    proxy: config?.proxy,
    headers: {
      'User-Agent': useRandomUserAgent(),
      'Referer': 'https://www.pixiv.net/',
      'Cookie': config?.pixiv?.phpSessId ? `PHPSESSID=${config.pixiv.phpSessId}` : undefined,
    },
  })

  return data
}

// To get following users, you must provide your phpSessId.
export async function pixivFollowingSource(params: Partial<PixivFollowingRequest>, config: SumireConfig) {
  if (!config.pixiv?.phpSessId) {
    return {
      error: true,
      data: new Error('You haven\'t provide Pixiv PHPSESSID!'),
    }
  }

  const followingBase = `https://www.pixiv.net/ajax/user/${params.userId}/following?offset=${params.offset}&limit=${params.limit}&rest=${params.rest}`

  const { data } = await axios({
    url: followingBase,
    method: 'get',
    params: {},
    proxy: config?.proxy,
    headers: {
      'User-Agent': useRandomUserAgent(),
      'Referer': 'https://www.pixiv.net/',
      'Cookie': config?.pixiv?.phpSessId ? `PHPSESSID=${config.pixiv.phpSessId}` : undefined,
    },
  })

  return data
}

// To get user's followers, you must provide your phpSessId.
export async function pixivFollowerSource(params: Partial<PixivFollowerRequest>, config: SumireConfig) {
  if (!config.pixiv?.phpSessId) {
    return {
      error: true,
      data: new Error('You haven\'t provide Pixiv PHPSESSID!'),
    }
  }

  const followerBase = `https://www.pixiv.net/ajax/user/${params.userId}/followers?offset=${params.offset}&limit=${params.limit}`

  const { data } = await axios({
    url: followerBase,
    method: 'get',
    params: {},
    proxy: config?.proxy,
    headers: {
      'User-Agent': useRandomUserAgent(),
      'Referer': 'https://www.pixiv.net/',
      'Cookie': config?.pixiv?.phpSessId ? `PHPSESSID=${config.pixiv.phpSessId}` : undefined,
    },
  })

  return data
}
