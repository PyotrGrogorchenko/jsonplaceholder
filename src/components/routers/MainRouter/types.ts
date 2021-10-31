import { FC } from 'react'

export type RoutesList = '/'

export type Routes = {
  [key in RoutesList]: FC<{}>
}
