import {
  ErrMsg,
} from './config'
import { fromUint8Array } from './from_buffer'
import {
  isArrayBuffer,
  isUint8Array,
  parseDecodeInputBase64,
  parseEncodeInputString,
  parseTextDecoder,
  parseTextEncoder,
} from './helper'
import { TextDecoderFn, TextEncoderFn } from './model'
import { toUint8Array } from './to_buffer'


export function browserEncode(
  input: string | number | bigint,
  textEncoder?: TextEncoderFn,
): string {

  const str: string = parseEncodeInputString(input)
  const Encoder = parseTextEncoder(textEncoder)
  const u8arr = new Encoder().encode(str)
  const ret = fromBuffer(u8arr)

  return ret
}


/** Encode to base64, source from ArrayBuffer or Uint8Array */
export function fromBuffer(buf: ArrayBuffer | Uint8Array): string {
  let input: Uint8Array

  if (! buf) {
    throw new TypeError(ErrMsg.fromArrayBufferInvalidParam)
  }
  else if (isUint8Array(buf)) {
    input = buf
  }
  else if (isArrayBuffer(buf)) {
    input = new Uint8Array(buf)
  }
  else {
    throw new TypeError(ErrMsg.fromArrayBufferInvalidParam)
  }

  return fromUint8Array(input)
}


export function browserDecode(
  base64: string,
  outputEncoding: string,
  textDecoder?: TextDecoderFn,
): string {

  const Decoder = parseTextDecoder(textDecoder)
  const u8arr = toBuffer(base64)
  const ret = new Decoder(outputEncoding).decode(u8arr)

  return ret
}


export function toBuffer(base64: string): Uint8Array {
  const str = parseDecodeInputBase64(base64)
  const u8arr = toUint8Array(str)

  return u8arr
}
