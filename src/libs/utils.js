export const extendStyle = (origin, val) => {
  if (origin && val) {
    return origin + ';' + val
  } else if (!origin) {
    return val
  } else if (!val) {
    return origin
  } else {
    return null
  }
}
