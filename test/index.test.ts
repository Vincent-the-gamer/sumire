import { test, expect } from "vitest"
import qs from "querystring"

test("qs", () => {
    const str = qs.stringify({
        a: 1,
        b: 2
    })

    expect(str).toBe("a=1&b=2")
})