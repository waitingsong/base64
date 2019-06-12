// rewrite from https://github.com/beatgammit/base64-js
import { revLookup, ErrorMsg } from './config'


export function toUint8Array(b64: string): Uint8Array {
  /* tslint:disable: no-bitwise */
  const lens = getLens(b64)
  const validLen = lens[0]
  const placeHoldersLen = lens[1]
  const arr = new Uint8Array(_byteLength(validLen, placeHoldersLen))
  let curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  const len = placeHoldersLen
    ? validLen - 4
    : validLen

  let i = 0

  for (; i < len; i += 4) {
    const tmp =
      revLookup[b64.charCodeAt(i)] << 18 |
      revLookup[b64.charCodeAt(i + 1)] << 12 |
      revLookup[b64.charCodeAt(i + 2)] << 6 |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = tmp >> 16 & 0xFF
    arr[curByte++] = tmp >> 8 & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    arr[curByte] = revLookup[b64.charCodeAt(i)] << 2 |
      revLookup[b64.charCodeAt(i + 1)] >> 4
  }
  else if (placeHoldersLen === 1) {
    const tmp =
      revLookup[b64.charCodeAt(i)] << 10 |
      revLookup[b64.charCodeAt(i + 1)] << 4 |
      revLookup[b64.charCodeAt(i + 2)] >> 2
    arr[curByte++] = tmp >> 8 & 0xFF
    arr[curByte] = tmp & 0xFF
  }


  /* tslint:enable: no-bitwise */
  return arr
}

export function getLens(input: string): [number, number] {
  /* tslint:disable: no-bitwise */
  const len = input.length

  if (len & 3 || len <= 0) {
    throw new Error(ErrorMsg.base64Invalidlength)
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  let validLen = input.indexOf('=')
  if (validLen === -1) {
    validLen = len
  }

  // 0 to 3 characters of padding so total length is a multiple of 4
  const placeHoldersLen = 3 - ((validLen + 3) & 3)

  /* tslint:enable: no-bitwise */
  return [validLen, placeHoldersLen]
}


export function _byteLength(validLen: number, placeHoldersLen: number): number {
  // tslint:disable-next-line: no-bitwise
  return (((validLen + placeHoldersLen) * 3) >> 2) - placeHoldersLen
}
