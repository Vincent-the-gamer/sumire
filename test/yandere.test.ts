import { yandere } from "../src"

const a = await yandere({
    tags: "persona",
    config: {
        proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 7890
        },
        r18: true
    }
})

console.log(a)