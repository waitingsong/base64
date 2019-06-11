
export const baseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
export const lookup: string[] = [...baseChars]
export const revLookup: number[] = []

for (let i = 0, len = lookup.length; i < len; ++i) {
  revLookup[lookup[i].charCodeAt(0)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

export const ErrorMsg = {
  fromArrayBufferInvalidParam: 'Invalid input, should be ArrayBuffer or Uint8Array',
  base64Invalidlength: 'Invalid string. Length must be a multiple of 4',
  notString: 'Invalid value of parameter, should be string',
  encodeInvalidParam: 'Invalid value of parameter of encode(), should be string|number|bigint',
  notValidB64String: 'Valid base64 string only contains /^[a-zA-Z0-9+/_-]+={0,2}$/',
  textEncoderUndefined: 'TextEncoder undefined!',
  textDecoderUndefined: 'TextDecoder undefined!',
  startMustGrossOrEqualToEnd:  'Parameters of start should less then end',
}

export const defaultConfig = {
  forceBrowser: false,
}
