import { ErrorMsg } from './config'
import { TextDecoderFn, TextEncoderFn } from './model'


export function parseEncodeInputString(input: string | number | bigint): string {
  const ret: string | null = typeof input === 'string'
    ? input
    // tslint:disable-next-line: valid-typeof
    : (typeof input === 'number' || typeof input === 'bigint' ? input.toString() : null)

  if (ret === null) {
    throw new TypeError(ErrorMsg.encodeInvalidParam)
  }

  return ret
}


export function parseDecodeInputBase64(base64: string): string {
  if (typeof base64 !== 'string') {
    throw new TypeError(ErrorMsg.notString)
  }
  else if (!validB64Chars(base64)) {
    throw new TypeError(ErrorMsg.notValidB64String)
  }

  return base64
}


export function parseTextEncoder(textEncoder?: TextEncoderFn): TextEncoderFn {
  const Encoder = typeof textEncoder === 'function'
    ? textEncoder
    : (typeof TextEncoder === 'function' ? TextEncoder : null)

  validateEncoder(Encoder)
  return <TextEncoderFn> Encoder
}


export function parseTextDecoder(textDecoder?: TextDecoderFn): TextDecoderFn {
  const Decoder = typeof textDecoder === 'function'
    ? textDecoder
    : (typeof TextDecoder === 'function' ? TextDecoder : null)

  validateDecoder(Decoder)
  return <TextDecoderFn> Decoder
}


/** Throw error if input be null */
export function validateEncoder(input: any): void {
  if (input === null) {
    throw new TypeError(ErrorMsg.textEncoderUndefined)
  }
}

/** Throw error if input be null */
export function validateDecoder(input: any): void {
  if (input === null) {
    throw new TypeError(ErrorMsg.textDecoderUndefined)
  }
}


/** Whether string contains valid base64 characters */
export function validB64Chars(input: string): boolean {
  const valid = /^[a-zA-Z0-9+/_-]+={0,2}$/.test(input)
  return valid
}


/** Whether running in Node.js */
export function isRunningInNodejs(): boolean {
  // Buffer exists under karma testing
  /* istanbul ignore next */
  return typeof process === 'object' && typeof Buffer === 'function' && typeof window === 'undefined'
    ? true
    : false
}


/** Whether input is instance of ArrayBuffer */
export function isArrayBuffer(buffer: any): buffer is ArrayBuffer {
  return buffer && buffer instanceof ArrayBuffer ? true : false
}

/** Whether input is instance of Uint8Array */
export function isUint8Array(buffer: any): buffer is Uint8Array {
  return ArrayBuffer.isView(buffer) && (buffer instanceof Uint8Array)
    ? true
    : false
}
