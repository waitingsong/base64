import { ErrorMsg } from './config'
import {
  isArrayBuffer, isUint8Array, parseDecodeInputBase64, parseEncodeInputString,
} from './helper'


export function NodeEncode(
  input: string | number | bigint,
): string {

  const str = parseEncodeInputString(input)
  const ret = Buffer.from(str).toString('base64')

  return ret
}

export function NodeDecode(
  base64: string,
  outputEncoding: string,
): string {

  const str = parseDecodeInputBase64(base64)
  const ret = Buffer.from(str, 'base64').toString(outputEncoding)

  return ret
}


/** Encode to base64, source from ArrayBuffer or Uint8Array */
export function fromBuffer(buf: ArrayBuffer | Uint8Array): string {
  let inst: Buffer

  if (! buf) {
    throw new TypeError(ErrorMsg.fromArrayBufferInvalidParam)
  }
  else if (isUint8Array(buf)) {
    inst = Buffer.from(buf)
  }
  else if (isArrayBuffer(buf)) {
    inst = Buffer.from(buf)
  }
  else {
    throw new TypeError(ErrorMsg.fromArrayBufferInvalidParam)
  }

  const ret = inst.toString('base64')
  return ret
}
