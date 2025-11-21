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
        mode?: "r18" | "all"
    }
}

export * from "./pixivTypes"