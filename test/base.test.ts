import qs from 'node:querystring'
import { expect, it } from 'vitest'

it('qs', () => {
  const str = qs.stringify({
    a: 1,
    b: 2,
  })

  expect(str).toBe('a=1&b=2')
})
