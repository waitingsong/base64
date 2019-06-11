

export function equal(buf1: Uint8Array, buf2: Uint8Array) {
  const length = buf1.length

  if (length !== buf2.length) {
    return false
  }
  for (let i = 0; i < length; i += 1) {
    if (buf1[i] !== buf2[i]) {
      return false
    }
  }
  return true
}
