import { lolicon } from '../src/core/lolicon-api'

async function testLolicon() {
  return await lolicon({
    r18: 1,
    num: 5,
    tag: [
      ['萝莉', '少女']
    ],
  })
}
