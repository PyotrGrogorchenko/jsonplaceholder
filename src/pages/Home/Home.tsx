import React, { FC, useState } from 'react'
import { Grid } from '@mui/material'
import { Albums } from '@components/Albums'
import { Photos } from '@components/Photos'

const Home: FC = () => {
  const [albumId, setAlbumId] = useState(0)

  const onAlbum = (cbAlbumId: number) => {
    setAlbumId(cbAlbumId)
  }

  return (
    <>
      <Grid container>
        <Grid item key='albums' md={4} xs={3}>
          <Albums cb={onAlbum}/>
        </Grid>
        <Grid item key='photos' md={8} xs={9}>
          <Photos albumId={albumId}/>
        </Grid>
      </Grid>
    </>
  )
}

export const HomeTSX = Home
