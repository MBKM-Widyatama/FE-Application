import { format, fromUnixTime } from 'date-fns'

export function formatDate(date: number | undefined) {
  if (!date) {
    return null
  }
  const newDate = fromUnixTime(date)
  return format(newDate, 'dd MMM yyyy')
}
