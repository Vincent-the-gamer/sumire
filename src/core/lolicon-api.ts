import axios from 'axios'

/**
 * Lolicon API v2 for Pixiv.net
 *
 * https://docs.api.lolicon.app/
 */
interface LoliconParams {
  r18?: number // 0: not R18, 1: R18, 2: mixed, default 0
  num?: number // result count, range 1 to 20, default 1
  uid?: number[] // returns artwork with specified user id(s), max length is 20
  keyword?: string // search condition, like title, author, tags, etc. Fuzzy matching. Not recommended. Better use tag.
  tag?: string[] | string[][] // returns artwork with specified tags. https://docs.api.lolicon.app/#/setu?id=tag
  size?: string[] // returns specified size of pictures. Options: "original", "regular", "small", "thumb", "mini". Default ["original"]
  proxy?: string // reverse proxy address of i.pximg.net, default i.pixiv.re
  dateAfter?: number // returns artwork which upload time after this value. Timestamp, unit: ms.
  dateBefore?: number // returns artwork which upload time before this value. Timestamp, unit: ms.
  dsc?: boolean // disable auto replacement between keyword(shorthand) and tag, default false. https://docs.api.lolicon.app/#/setu?id=dsc
  excludeAI?: boolean // default false
  aspectRatio?: string // https://docs.api.lolicon.app/#/setu?id=aspectratio
}

export async function lolicon(params: LoliconParams) {
  const base = 'https://api.lolicon.app/setu/v2'

  const { data } = await axios.post(base, params, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return data
}
