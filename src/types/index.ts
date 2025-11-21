export interface SumireConfig {
    proxy?: {
        protocol: string,
        host: string,
        port: number
    },
    auth?: {
        username: string,
        password: string
    }
    r18?: boolean
}