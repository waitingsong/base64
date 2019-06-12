import {
  browserDecode,
  browserEncode,
  fromBuffer as browserFromBuffer,
} from './browser'
import { defaultConfig } from './config'
import { isRunningInNodejs } from './helper'
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

  const ret = isRunningInNodejs() && ! defaultConfig.forceBrowser
    ? NodeEncode(input)
    : browserEncode(input, textEncoder)
  return ret
}


/** Encode to base64, source from string */
export function b64decode(
  base64: string,
  outputEncoding: string = 'utf-8',
  textDecoder?: TextDecoderFn,
): string {

  const ret = isRunningInNodejs() && ! defaultConfig.forceBrowser
    ? NodeDecode(base64, outputEncoding)
    : browserDecode(base64, outputEncoding, textDecoder)
  return ret
}


/** Encode to base64, source from ArrayBuffer or Uint8Array */
export function b64fromBuffer(buffer: ArrayBuffer | Uint8Array): string {
  const ret = isRunningInNodejs() && ! defaultConfig.forceBrowser
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
