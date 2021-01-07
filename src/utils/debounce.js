export default function debounce(callback, time) {
  let setTimeoutId

  return function () {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId)
    }

    setTimeoutId = setTimeout(() => {
      callback.apply(this, arguments)
      setTimeoutId = null
    }, time)
  }
}
