export type PublicMethods = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type Props = {
  title: string,
  src: string,
  ref: React.ForwardedRef<PublicMethods>
}
