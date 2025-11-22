export interface SumireConfig {
    proxy?: {
        protocol: string,
        host: string,
        port: number
    },
    yandere?: {
        auth?: {
            username?: string,
            password?: string
        },
        r18?: boolean
    },
    pixiv?: {
        mode?: "r18" | "safe" | "all",
        phpSessId?: string,
        mirror?: string // mirror of i.pximg.net, which will be blocked by referer policy.
    }
}

export * from "./pixivTypes"