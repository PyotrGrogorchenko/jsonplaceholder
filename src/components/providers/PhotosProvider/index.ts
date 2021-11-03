import { memo } from 'react'
import { PhotosProviderTSX } from './PhotosProvider'

export const PhotosProvider = memo(PhotosProviderTSX)
export { usePhotos } from './PhotosProvider'
