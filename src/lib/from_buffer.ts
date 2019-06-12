// rewrite from https://github.com/beatgammit/base64-js
import { lookup, ErrorMsg } from './config'


export function fromUint8Array(input: Uint8Array): string {
  /* tslint:disable: no-bitwise */
  const len = input.length
  const extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  const len2 = len - extraBytes
  const maxChunkLength = 12000 // must be multiple of 3
  const parts: string[] = new Array(
    Math.ceil(len2 / maxChunkLength) + (extraBytes ? 1 : 0),
  )
  let curChunk = 0

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (let i = 0, nextI = 0; i < len2; i = nextI) {
    nextI = i + maxChunkLength
    parts[curChunk] = encodeChunk(input, i, Math.min(nextI, len2))
    curChunk += 1
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    const tmp = input[len2] & 0xFF
    parts[curChunk] = lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '=='
  }
  else if (extraBytes === 2) {
    const tmp = (input[len2] & 0xFF) << 8 | (input[len2 + 1] & 0xFF)
    parts[curChunk] = lookup[tmp >> 10] +
      lookup[tmp >> 4 & 0x3F] +
      lookup[tmp << 2 & 0x3F] +
      '='
  }

  /* tslint:enable: no-bitwise */
  return parts.join('')
}


function encodeChunk(input: Uint8Array, start: number, end: number): string {
  if (start > end) {
    throw new Error(ErrorMsg.startMustGrossOrEqualToEnd)
  }
  const arrLen = Math.ceil((end - start) / 3)
  const ret: string[] = new Array(arrLen)

  /* tslint:disable: no-bitwise */
  for (let i = start, curTriplet = 0; i < end; i += 3, curTriplet += 1) {
    ret[curTriplet] = tripletToBase64(
      (input[i] & 0xFF) << 16 |
      (input[i + 1] & 0xFF) << 8 |
      (input[i + 2] & 0xFF),
    )
  }
  /* tslint:enable: no-bitwise */
  return ret.join('')
}

function tripletToBase64(pos: number): string {
  /* tslint:disable: no-bitwise */
  const ret = lookup[pos >> 18 & 0x3F] +
    lookup[pos >> 12 & 0x3F] +
    lookup[pos >> 6 & 0x3F] +
    lookup[pos & 0x3F]

  /* tslint:enable: no-bitwise */
  return ret
}
