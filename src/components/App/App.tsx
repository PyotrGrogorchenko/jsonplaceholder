import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'
import React from 'react'
import { MainRouter } from '@components/routers/MainRouter'
import { NotiProvider } from '@components/providers/NotiProvider'

const theme = createMuiTheme()

export const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <NotiProvider>
        <CssBaseline/>
        <MainRouter/>
      </NotiProvider>
    </ThemeProvider>
  </>
)
