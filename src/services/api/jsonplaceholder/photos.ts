import { ResBase } from '@api/types'
import { getErrorResponse } from '@api/utils'
import { getTransport } from '@xhr'
import 'regenerator-runtime/runtime'
import { url } from './url'

export type Photo = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

export type ResPhotos = {
  data: Photo[]
} & ResBase

export const getPhotos = async (data: {page: number, albumId?: number}): Promise<ResPhotos | ResBase> => {
  const { page, albumId } = data
  try {
    return await getTransport().get(`${url.photos}?_page=${page} ${albumId && `&albumId=${albumId}`}`)
  } catch (err) {
    return getErrorResponse(err)
  }
}

export const deletePhoto = async (id: number): Promise<ResBase> => {
  try {
    return await getTransport().delete(`${url.photos}/${id}`)
  } catch (err) {
    return getErrorResponse(err)
  }
}
