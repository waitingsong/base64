import {
  browserDecode,
  browserEncode,
  fromBuffer as browserFromBuffer,
} from './browser'
import { defaultConfig } from './config'
import { isBrowser } from './helper'
import { TextDecoderFn, TextEncoderFn } from './model'
import {
  fromBuffer as nodeFromBuffer,
  NodeDecode,
  NodeEncode,
} from './nodejs'
import { getLens, _byteLength } from './to_buffer'


export function b64encode(
  input: string | number | bigint,
  textEncoder?: TextEncoderFn,
): string {

  const ret = defaultConfig.forceBrowser || isBrowser()
    ? browserEncode(input, textEncoder)
    : NodeEncode(input)
  return ret
}


/** Encode to base64, source from string */
export function b64decode(
  base64: string,
  outputEncoding: string = 'utf-8',
  textDecoder?: TextDecoderFn,
): string {

  const ret = defaultConfig.forceBrowser || isBrowser()
    ? browserDecode(base64, outputEncoding, textDecoder)
    : NodeDecode(base64, outputEncoding)
  return ret
}


/** Encode to base64, source from ArrayBuffer or Uint8Array */
export function b64fromBuffer(buffer: ArrayBuffer | Uint8Array): string {
  const ret = defaultConfig.forceBrowser || isBrowser()
    ? nodeFromBuffer(buffer)
    : browserFromBuffer(buffer)
  return ret
}


/**
 * Calculate buffer.byteLength from base64
 *
 * base64 is 4/3 + up to two characters of the original data
 */
export function b64byteLength(base64: string): number {
  const lens = getLens(base64)
  const validLen = lens[0]
  const placeHoldersLen = lens[1]
  return _byteLength(validLen, placeHoldersLen)
}
