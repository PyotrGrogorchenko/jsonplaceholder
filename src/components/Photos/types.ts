import { WithStyles } from '@material-ui/core'
import { styles } from './styles'

export type Props = {
  albumId: number
} & WithStyles<typeof styles>
