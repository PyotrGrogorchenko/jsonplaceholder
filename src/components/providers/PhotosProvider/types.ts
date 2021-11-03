import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export type Context = {
  albumId: number,
  putAlbumId:(newId: number) => void
}
