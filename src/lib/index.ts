import {
  browserDecode,
  browserEncode,
  fromBuffer as browserFromBuffer,
} from './browser'
import { defaultConfig } from './config'
import { b64toURLSafe, b64PadSuffix, isRunningInNodejs } from './helper'
import { TextDecoderFn, TextEncoderFn } from './model'
import {
  fromBuffer as nodeFromBuffer,
  nodeDecode,
  nodeEncode,
} from './nodejs'
import { getLens, _byteLength } from './to_buffer'


/** Encode to base64, source from string|number|bigint */
export function b64encode(
  input: string | number | bigint,
  textEncoder?: TextEncoderFn,
): string {

  const ret = isRunningInNodejs() && ! defaultConfig.forceBrowser
    ? nodeEncode(input)
    : browserEncode(input, textEncoder)
  return ret
}


/** Decode base64 to string */
export function b64decode(
  base64: string,
  outputEncoding: string = 'utf-8',
  textDecoder?: TextDecoderFn,
): string {

  const ret = isRunningInNodejs() && ! defaultConfig.forceBrowser
    ? nodeDecode(base64, outputEncoding)
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


/**
 * Encode to URL-safe base64, source from string|number|bigint.
 * Replace "+" to "-" and "/" to "_", and Remove "=".
 *
 * Note: using b64toURLSafe() for converting base64 string to URL-safe base64 string
 *
 * @see https://en.wikipedia.org/wiki/Base64#URL_applications
 */
export function b64urlEncode(
  input: string,
  textEncoder?: TextEncoderFn,
): string {

  const b64 = b64encode(input, textEncoder)
  return b64toURLSafe(b64)
}


/**
 * Decode URL-safe base64 to original string.
 *
 * Note: using b64fromURLSafe() for converting URL-safe base64 string to base64 string
 *
 * @see https://en.wikipedia.org/wiki/Base64#URL_applications
 */
export function b64urlDecode(
  input: string,
  outputEncoding: string = 'utf-8',
  textDecoder?: TextDecoderFn,
): string {

  const str = b64PadSuffix(input) // for URL-safe
  return b64decode(str, outputEncoding, textDecoder)
}
