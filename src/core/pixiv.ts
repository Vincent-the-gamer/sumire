import axios from "axios"
import { SumireConfig } from "../types"
import { useRandomUserAgent } from "../utils/userAgent"

interface Params {
    tags?: string
    mode?: string,
    limit?: number,
    config?: SumireConfig
}


export async function pixivDiscovery(params: Params) {
    const discoveryBase = 'https://www.pixiv.net/ajax/illust/discovery'

    let tags = params.tags || ""
    
    const { config, limit } = params

    const { pixiv, proxy } = config!

    if(tags) {
      params.tags = tags
    }

    if(pixiv?.mode) {
      params.mode = pixiv.mode
    }

    const { data } = await axios({
        method: 'get',
        params,
        proxy,
        headers: {
          "User-Agent": useRandomUserAgent(),
          "Referer": "https://www.pixiv.net/"
        }
    })
    
}