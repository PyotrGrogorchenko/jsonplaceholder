import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export type Context = {
  albumId: number,
  updateAlbumId:(newId: number) => void
}
