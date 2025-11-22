import { yandere } from "../src"

const a = await yandere(
    { 
        tags: "persona"
    },
    {
        proxy: {
            protocol: "http",
            host: "127.0.0.1",
            port: 7890
        },
        yandere: {
            r18: true
        }
    }
)

console.log(a)