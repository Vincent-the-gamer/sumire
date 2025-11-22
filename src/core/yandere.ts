import type { SumireConfig } from '../types'
import { createHash } from 'node:crypto'
import axios from 'axios'

export interface Params {
  tags?: string
  limit?: number
  login?: string
  password_hash?: string
  api_version?: number
}

function hashPassword(password: string): string {
  const salted = `choujin-steiner--${password}--`
  const hash = createHash('sha1')
  hash.update(salted)
  return hash.digest('hex')
}

export async function yandere(params: Partial<Params>, config?: SumireConfig): Promise<Record<string, any>> {
  const apiBase = 'https://yande.re/post.json'

  if (!params.api_version) {
    params.api_version = 2
  }

  if (config?.yandere) {
    const { auth, r18 } = config.yandere
    if (auth) {
      params.login = auth.username
      params.password_hash = hashPassword(auth.password!)
    }

    const tags = params.tags

    if (r18) {
      params.tags = `rating:explicit ${tags}`
    }
    else {
      params.tags = `rating:safe ${tags}`
    }
  }

  const { data } = await axios({
    method: 'get',
    url: apiBase,
    params,
    proxy: config?.proxy,
  })

  return data
}
