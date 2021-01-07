export default function formatLocaleTime(time) {
  const date = new Date(time)

  return date
    .toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .toLowerCase()
}
