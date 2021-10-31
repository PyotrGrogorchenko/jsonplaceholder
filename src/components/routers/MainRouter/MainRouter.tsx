import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageError, routes } from './const'

export const MainRouterTSX: FC = () => (
  <Switch>
    <Route path='/' exact component={routes['/']}/>
    <Route component={PageError}/>
  </Switch>
)
