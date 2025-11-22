export interface PixivIllustResponse {
  error: boolean
  message: string
  body: {
    urls: {
      thumb_mini: string
      small: string
      regular: string
      original: string
    }
    width: number
    height: number
  }[]
}

export interface PixivFollowingResponse {
  error: boolean
  body: {
    users: {
      userId: string
      userName: string
    }[]
  }
}

export interface PixivUserProfileResponse {
  error: boolean
  body: {
    illusts: {
      [key: string]: any
    }
  }
}

export interface PixivResponse {
  error: boolean
  message: string
  body: {
    illusts: {
      id: string
      title: string
      url: string
      tags: string[]
      userId: string
      userName: string
      xRestrict: number
      createDate: string
    }[]
  }
}
