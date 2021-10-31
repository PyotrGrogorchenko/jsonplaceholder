import React, {
  FC, useCallback, useEffect, useMemo, useState
} from 'react'
import { Box, Pagination, Grid } from '@mui/material'
import { withStyles } from '@material-ui/core'
import { getPhotos, Photo } from '@api/jsonplaceholder/photos'
import { Card } from '@components/UI/Card'
import { useSnackbar } from 'notistack'
import { styles } from './styles'
import { Props } from './types'

const Photos: FC<Props> = (props) => {
  const { classes, albumId } = props

  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState(1)

  const { enqueueSnackbar } = useSnackbar()

  const count = useMemo(() => (albumId ? 5 : 500), [albumId])

  const getData = useCallback((reset: boolean) => {
    getPhotos({ page, albumId })
      .then((res) => {
        if (res.status === 200) {
          if (reset) setPage(1)
          setPhotos(res.data as Photo[])
        } else {
          enqueueSnackbar('Failed to get photos', { variant: 'error' })
        }
      })
      .catch(() => enqueueSnackbar('Failed to get photos', { variant: 'error' }))
  }, [page, albumId])

  useEffect(() => {
    getData(false)
  }, [page])

  useEffect(() => {
    getData(true)
  }, [albumId])

  const onPagination = useCallback((e: React.ChangeEvent<unknown>, newPage: number) => {
    e.preventDefault()
    setPage(newPage)
  }, [])

  const cbDelete = useCallback((id: number) => {
    setPhotos(photos.filter((photo) => photo.id !== id))
  }, [photos])

  return (
    <>
      <Pagination count={count} page={page} color='primary' onChange={onPagination}/>
      <Box className={classes.gridRoot}>
        <Grid container>
          {photos.map((photo) => (
            <Grid className={classes.gridItem} item key={photo.id} md={3} xs={6}>
              <Card photo={photo} cbDelete={cbDelete}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export const PhotosTSX = withStyles(styles)(Photos)
