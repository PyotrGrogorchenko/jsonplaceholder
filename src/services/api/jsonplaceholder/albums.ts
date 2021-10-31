import { ResBase } from '@api/types'
import { getErrorResponse } from '@api/utils'
import { getTransport } from '@xhr'
import 'regenerator-runtime/runtime'
import { url } from './url'

export type Album = {
  userId: number,
  id: number,
  title: string
}

export type ResAlbums = {
  data: Album[]
} & ResBase

export const getAlbums = async (data: {page: number}): Promise<ResAlbums | ResBase> => {
  const { page } = data
  try {
    return await getTransport().get(`${url.albums}?_page=${page}`)
  } catch (err) {
    return getErrorResponse(err)
  }
}
