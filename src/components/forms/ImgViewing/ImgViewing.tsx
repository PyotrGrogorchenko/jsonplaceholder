import React, { FC, useCallback } from 'react'
import {
  Button, DialogActions, DialogContent, DialogTitle, Dialog
} from '@mui/material'
import { Props } from './types'

const ImgViewing: FC<Props> = (props: Props) => {
  const {
    title, src, cbClose
  } = props

  const onClose = useCallback(() => {
    cbClose()
  }, [])

  return (
    <>
      <Dialog
        open
        aria-labelledby='viewing-dialog'
      >
        <DialogTitle id='viewing-dialog_title'>
          {title}
        </DialogTitle>
        <DialogContent>
          <img alt={title} src={src}/>
        </DialogContent>
        <DialogActions>
          <Button id='viewing-dialog_close' onClick={onClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export const ImgViewingTSX = ImgViewing
