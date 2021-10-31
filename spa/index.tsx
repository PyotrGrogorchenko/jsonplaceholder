import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../src/components/ErrorBoundary'
import { App } from '../src/components/App'
import '@babel/polyfill'

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
)
