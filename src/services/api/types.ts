export type ResBase = {
  status: number
  data: {
    error: string & Error
    reason: string
  }
}
