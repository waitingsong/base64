
export const baseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
export const lookup: string[] = []
export const revLookup: number[] = []

for (let i = 0, len = baseChars.length; i < len; ++i) {
  lookup[i] = baseChars[i]
  revLookup[baseChars.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

export const ErrMsg = {
  base64Invalidlength: 'Invalid string. Length must be a multiple of 4 and positive',
  base64InvalidEqualPosition: 'Invalid base64 string, char "=" should not exists or at posiont >= 2',
  encodeInvalidParam: 'Invalid value of parameter of encode(), should be string|number|bigint',
  fromArrayBufferInvalidParam: 'Invalid input, should be ArrayBuffer or Uint8Array',
  notString: 'Invalid value of parameter, should be string',
  notValidB64String: 'Valid base64 string only matches /^[a-zA-Z0-9+/_-]+={0,2}$/',
  notValidB64URLString: 'Valid URL-safe base64 string only matchs /^[a-zA-Z0-9_-]+$/',
  notValidB64Length: 'Valid base64 string contains as least 4 chars',
  notValidB64URLLength: 'Valid URL-safe base64 string contains as least 2 chars',
  startMustGrossOrEqualToEnd:  'Parameters of start should less then or equal to end',
  startMustGrossToEnd:  'Parameters of start should less then end',
  textEncoderUndefined: 'TextEncoder undefined!',
  textDecoderUndefined: 'TextDecoder undefined!',
}

export const defaultConfig = {
  forceBrowser: false,
}
