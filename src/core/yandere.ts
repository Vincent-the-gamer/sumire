import axios from "axios"
import { createHash } from "crypto"
import { SumireConfig } from "../types"

export interface Params {
    tags?: string,
    limit?: number
    login?: string,
    password_hash?: string,
    api_version?: number,
    config?: SumireConfig
}

function hashPassword(password: string): string {
    const salted = `choujin-steiner--${password}--`
    const hash = createHash('sha1')
    hash.update(salted)
    return hash.digest('hex')
}

export async function yandere(params: Partial<Params>) {
    const apiBase = "https://yande.re/post.json"
    params.api_version = 2
    
    const { proxy, auth, r18 } = params.config!
    
    if(auth) {
        params.login = auth.username
        params.password_hash = hashPassword(auth.password)
    }

    let tags = params.tags

    if(r18) {
        params.tags = `rating:explicit ${ tags }`
    } else {
        params.tags = `rating:safe ${ tags }`
    }

    const { data } = await axios({
        method: 'get',
        url: apiBase,
        params,
        proxy
    })

    return data
}