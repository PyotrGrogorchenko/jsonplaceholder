import React, {
  FC, useCallback, useEffect, useState
} from 'react'
import {
  ListItemText, ListItemButton, List, ListItem, Pagination, ListItemIcon
} from '@mui/material'
import {
  withStyles
} from '@material-ui/core'
import { Album, getAlbums } from '@api/jsonplaceholder/albums'
import StarIcon from '@mui/icons-material/Star'
import { useSnackbar } from 'notistack'
import { usePhotos } from '@components/providers/PhotosProvider'
import { styles } from './styles'
import { Props } from './types'

const Albums: FC<Props> = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [page, setPage] = useState(1)

  const { enqueueSnackbar } = useSnackbar()

  const photosContext = usePhotos()
  const { albumId, updateAlbumId } = photosContext

  useEffect(() => {
    getAlbums({ page })
      .then((res) => {
        if (res.status === 200) {
          setAlbums(res.data as Album[])
        } else {
          enqueueSnackbar('Failed to get albums', { variant: 'error' })
        }
      })
      .catch(() => enqueueSnackbar('Failed to get albums', { variant: 'error' }))
  }, [page])

  const onAlbum = useCallback((e: OnClick, newId: number) => {
    e.preventDefault()
    updateAlbumId(newId)
  }, [])

  const onPagination = useCallback((e: React.ChangeEvent<unknown>, newPage: number) => {
    e.preventDefault()
    setPage(newPage)
  }, [])

  return (
    <>
      <Pagination count={10} color='primary' onChange={onPagination}/>
      <List
        aria-label='Albums'
      >
        {albums.map((album) => (
          <ListItem key={album.id} disablePadding>
            <ListItemButton onClick={(e) => onAlbum(e, album.id)}>
              {album.id === albumId && <ListItemIcon><StarIcon/></ListItemIcon>}
              <ListItemText primary={album.title}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export const AlbumsTSX = withStyles(styles)(Albums)
