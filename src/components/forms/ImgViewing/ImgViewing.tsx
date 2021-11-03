import React, {
  FC, useCallback, forwardRef, useState, useImperativeHandle
} from 'react'
import {
  Button, DialogActions, DialogContent, DialogTitle, Dialog
} from '@mui/material'
import { Props } from './types'

const ImgViewing: FC<Props> = forwardRef((props, ref) => {
  const { title, src } = props

  const [open, setOpen] = useState(false)

  const onClose = useCallback((e: OnClick) => {
    e.preventDefault()
    setOpen(false)
  }, [])

  useImperativeHandle(ref, () => ({
    setOpen
  }), [])

  return (
    <>
      <Dialog
        open={open}
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
})

export const ImgViewingTSX = ImgViewing
