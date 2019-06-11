import {
  browserDecode,
  browserEncode,
} from './browser'
import { defaultConfig } from './config'
import { isBrowser } from './helper'
import { TextDecoderFn, TextEncoderFn } from './model'
import { NodeDecode, NodeEncode } from './nodejs'


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
