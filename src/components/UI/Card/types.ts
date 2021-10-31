import { Photo } from '@api/jsonplaceholder/photos'
import { WithStyles } from '@material-ui/core'
import { styles } from './styles'

export type Props = {
  photo: Photo,
  cbDelete: (id: number) => void
} & WithStyles<typeof styles>
