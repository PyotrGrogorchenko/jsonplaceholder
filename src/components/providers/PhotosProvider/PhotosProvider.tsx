import React, {
  createContext, FC, useState, useContext, useCallback
} from 'react'
import { Props, Context } from './types'

// @ts-ignore
const PhotosContext = createContext<Context>({})
export const usePhotos = () => useContext(PhotosContext)

const PhotosProvider: FC<Props> = (props) => {
  const { children } = props

  const [albumId, setAlbumId] = useState(-1)
  const updateAlbumId = useCallback((newId) => setAlbumId(newId), [])

  return (
    <PhotosContext.Provider value={{ albumId, updateAlbumId }}>
      {children}
    </PhotosContext.Provider>
  )
}
export const PhotosProviderTSX = PhotosProvider
