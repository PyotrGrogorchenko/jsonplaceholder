import { WithStyles } from '@material-ui/core'
import { styles } from './styles'

export type Props = {
  cb: (albumId: number) => void
} & WithStyles<typeof styles>
