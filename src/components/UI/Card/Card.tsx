import React, {
  FC, RefObject, useCallback, useRef
} from 'react'
import {
  Typography, Card as CardMui, CardActionArea, CardMedia, CardContent, IconButton, CardActions
} from '@mui/material'
import { withStyles } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import { deletePhoto } from '@api/jsonplaceholder/photos'
import { ImgViewing } from '@components/forms/ImgViewing'
import { useSnackbar } from 'notistack'
import { PublicMethods } from '@components/forms/ImgViewing/types'
import { styles } from './styles'
import { Props } from './types'

const Card: FC<Props> = (props) => {
  const { photo, classes, cbDelete } = props
  const {
    id, albumId, title, url
  } = photo

  const imgViewingRef = useRef() as RefObject<PublicMethods>
  const { enqueueSnackbar } = useSnackbar()

  const onDelete = useCallback((e: OnClick) => {
    e.preventDefault()
    deletePhoto(id)
      .then((res) => {
        if (res.status === 200) {
          cbDelete(id)
          enqueueSnackbar('Photo deleted', { variant: 'success' })
        } else {
          enqueueSnackbar('Failed to delete pgoto', { variant: 'error' })
        }
      })
      .catch(() => enqueueSnackbar('Failed to delete pgoto', { variant: 'error' }))
  }, [id, cbDelete])

  const onCard = useCallback((e: OnClick) => {
    e.preventDefault()
    imgViewingRef.current?.setOpen(true)
  }, [imgViewingRef])

  return (
    <>
      <CardMui className={classes.card}>
        <CardActionArea onClick={onCard}>
          <CardMedia
            component='img'
            image={photo.thumbnailUrl}
            alt={photo.title}
          />
          <CardContent style={{ padding: '3px' }}>
            <Typography gutterBottom variant='subtitle2' component='div' color='textSecondary'>
              {`a:${albumId} #${id}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing style={{ padding: 0 }}>
          <IconButton aria-label='delete photo' onClick={onDelete}>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
      </CardMui>
      <ImgViewing title={title} src={url} ref={imgViewingRef}/>
    </>
  )
}

export const CardTSX = withStyles(styles)(Card)
