import { lolicon } from '../src/core/lolicon-api'

async function testLolicon() {
  return await lolicon({
    r18: 1,
    num: 5,
    tag: [
      ['萝莉', '少女'],
    ],
    aspectRatio: 'gte1.777lte1.778',
  })
}

const a = await testLolicon()
console.log(
  JSON.stringify(a),
)
