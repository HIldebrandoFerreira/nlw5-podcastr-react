import { type } from "os"

type episode = {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  file: {
    url: string
    type: string
    duration: BigInteger
  }
}

export interface Episodes {
  episodes: episode[]
}

export interface Episode {
  episode: episode
}
