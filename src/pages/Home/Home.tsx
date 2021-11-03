import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { Albums } from '@components/Albums'
import { Photos } from '@components/Photos'
import { PhotosProvider } from '@components/providers/PhotosProvider'

const Home: FC = () => (
  <>
    <PhotosProvider>
      <Grid container>
        <Grid item key='albums' md={4} xs={3}>
          <Albums/>
        </Grid>
        <Grid item key='photos' md={8} xs={9}>
          <Photos/>
        </Grid>
      </Grid>
    </PhotosProvider>
  </>
)

export const HomeTSX = Home
