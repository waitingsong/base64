import {
  TextDecoder as NodeTextDecoder,
  TextEncoder as NodeTextEncoder,
} from 'util'

export type BrowserTextEncoderType = typeof TextEncoder
export type BrowserTextDecoderType = typeof TextDecoder

export type NodeTextEncoderType = typeof NodeTextEncoder
export type NodeTextDecoderType = typeof NodeTextDecoder

export type TextEncoderFn = BrowserTextEncoderType | NodeTextEncoderType
export type TextDecoderFn = BrowserTextDecoderType | NodeTextDecoderType
