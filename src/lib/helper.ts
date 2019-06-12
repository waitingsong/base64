import { ErrMsg } from './config'
import { TextDecoderFn, TextEncoderFn } from './model'


export function parseEncodeInputString(input: string | number | bigint): string {
  const ret: string | null = typeof input === 'string'
    ? input
    // tslint:disable-next-line: valid-typeof
    : (typeof input === 'number' || typeof input === 'bigint' ? input.toString() : null)

  if (ret === null) {
    throw new TypeError(ErrMsg.encodeInvalidParam)
  }

  return ret
}


export function parseDecodeInputBase64(base64: string): string {
  if (typeof base64 !== 'string') {
    throw new TypeError(ErrMsg.notString)
  }
  else if (!validB64Chars(base64)) {
    throw new TypeError(ErrMsg.notValidB64String)
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
    throw new TypeError(ErrMsg.textEncoderUndefined)
  }
}

/** Throw error if input be null */
export function validateDecoder(input: any): void {
  if (input === null) {
    throw new TypeError(ErrMsg.textDecoderUndefined)
  }
}


/** Whether string contains valid base64 characters */
export function validB64Chars(input: string): boolean {
  return /^[a-zA-Z0-9+/_-]+={0,2}$/.test(input)
}

/** Whether string contains valid URL-safe base64 characters */
export function validB64URLChars(input: string): boolean {
  return /^[a-zA-Z0-9_-]+$/.test(input)
}

/** Validate input is valid base64 string or throw error */
export function validateB64(input: string): void {
  const status = testB64(input)
  if (status !== true) {
    throw new Error(status)
  }
}

/** Validate input is valid URL-safe base64 string or throw error */
export function validateB64URL(input: string): void {
  const status = testB64URL(input)
  if (status !== true) {
    throw new Error(status)
  }
}

/** Return true for valid base64 input, error message for invalid */
export function testB64(input: string): true | string {
  if (typeof input !== 'string') {
    return ErrMsg.notString
  }
  else if (! validB64Chars(input)) {
    return ErrMsg.notValidB64String
  }
  else if (input.length < 4) {
    return ErrMsg.notValidB64Length
  }
  else if (input.length % 4 !== 0) {
    return ErrMsg.base64Invalidlength
  }

  return true
}

/** Return true for valid URL-safe base64 input,  error message for invalid */
export function testB64URL(input: string): true | string {
  if (typeof input !== 'string') {
    return ErrMsg.notString
  }
  else if (! validB64URLChars(input)) {
    return ErrMsg.notValidB64URLString
  }
  else if (input.length < 2) {  // URL-safe at least 2
    return ErrMsg.notValidB64URLLength
  }

  return true
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


/**
 * Convert base64 string to URL-safe base64 string.
 * Replace "+" to "-" and "/" to "_", and Remove "="
 *
 * @see https://en.wikipedia.org/wiki/Base64#URL_applications
 */
export function b64toURLSafe(base64: string): string {
  validateB64(base64)
  const pos = base64.indexOf('=')
  return pos > 0
    ? base64.slice(0, pos).replace(/\+/g, '-').replace(/\//g, '_')
    : base64.replace(/\+/g, '-').replace(/\//g, '_')
}


/**
 * Convert URL-safe base64 string to base64 string.
 * Replace "-" to "+" and "_" to "/", and pad with "="
 *
 * @see https://en.wikipedia.org/wiki/Base64#URL_applications
 */
export function b64fromURLSafe(base64: string): string {
  validateB64URL(base64)
  const str = base64.replace(/-/g, '+').replace(/_/g, '/')
  return b64PadSuffix(str)
}


export function b64PadSuffix(input: string): string {
  let num = 0
  const mo = input.length % 4
  switch (mo) {
    case 3:
      num = 1
      break
    case 2:
      num = 2
      break
    case 0:
      num = 0
      break
    default:
      throw new Error(ErrMsg.notValidB64URLLength)
  }

  return input + '='.repeat(num)
}
