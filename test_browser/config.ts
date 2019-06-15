import {
  baseChars,
} from '../src/lib/config'

import { _dummy } from './patch'


// @ts-ignore
export const isIE = /* @cc_on!@*/false || !! document.documentMode
// @ts-ignore
export const isEdge = ! isIE && !! window.StyleMedia

export const input1: Array<string | number | bigint> = [
  baseChars,
  'a\'b"c<d>e&f=g/[].,:;+-_`~!@#$%^&*(){}*\\ ',
  'A',
  '  ',
  ' ',
  '\r\n',
  '\r',
  '\n',
  '0',
  '€',
  'schöne',
  'grüße',
  '中文，。！',
  '联通',
  'Привет, мир!',
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
  1,
  -1,
  0,
  -0,
]
export const base1: string[] = [
  'QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLw==',
  'YSdiImM8ZD5lJmY9Zy9bXS4sOjsrLV9gfiFAIyQlXiYqKCl7fSpcIA==',
  'QQ==',
  'ICA=',
  'IA==',
  'DQo=',
  'DQ==',
  'Cg==',
  'MA==',
  '4oKs',
  'c2Now7ZuZQ==',
  'Z3LDvMOfZQ==',
  '5Lit5paH77yM44CC77yB',
  '6IGU6YCa',
  '0J/RgNC40LLQtdGCLCDQvNC40YAh',
  'OTAwNzE5OTI1NDc0MDk5MQ==',
  'LTkwMDcxOTkyNTQ3NDA5OTE=',
  'MQ==',
  'LTE=',
  'MA==',
  'MA==',
]

export const input2: string[] = [
  '𠮷', '\uD842\uDFB7', '\u{D842}\u{DFB7}', '\u{20BB7}',
]
export const base2: string[] = [
  '8KCutw==',
  '8KCutw==',
  '8KCutw==',
  '8KCutw==',
]

export const input3: string[] = [
  '\uD800',
  '\uD801',
  '\uD842',
]
export const base3: string[] = [
  '77+9',
  '77+9',
  '77+9',
]

export const input4: Array<string | number> = [
  Math.random(),
  Math.random().toString(),
]
export const base4: string[] = [
  'MC41NDc0MjU2NzQ0NTY2NzA4',
  'MC4xMzk2OTgxNzY3NTE1Njg4MQ==',
]


export const input44: any[] = [
  {},
  null,
  true,
  false,
  (void 0),
]

export type Input8Item = [number[], string]
export const input8: Input8Item[] = [
  [ [0, 0, 0], 'AAAA'],
  [ [0, 0, 1], 'AAAB'],
  [ [0, 1, -1], 'AAH/'],
  [ [1, 1, 1], 'AQEB'],
  [ [0, -73, 23], 'ALcX'],
  [ [0xe4, 0xb8, 0xad, 0xe6, 0x96, 0x87], '5Lit5paH'],
]

export const input9 = [
  ' ',
  '*',
  '?',
]


export const inputTypedArrayExcludingUint8Array = [
  new Uint16Array(),
  new Uint32Array(),
  new Uint8ClampedArray(),
  new Int8Array(),
  new Int16Array(),
  new Int32Array(),
  new Float32Array(),
  // new Float64Array(),
  // new BigInt64Array(),
]

export const inputUint8Array = [
  new Uint8Array(0),
  new Uint8Array(1),
  new Uint8Array(1024),
]

export const inputArrayBuffer = [
  new ArrayBuffer(0),
  new ArrayBuffer(1),
  new ArrayBuffer(1024),
]


/** [string, base64, URL-safe base64] */
export const inputURLSafe = [
  ['中文测试', '5Lit5paH5rWL6K+V', '5Lit5paH5rWL6K-V'],
  ['Привет, мир!', '0J/RgNC40LLQtdGCLCDQvNC40YAh', '0J_RgNC40LLQtdGCLCDQvNC40YAh'],
  ['A', 'QQ==', 'QQ'],
  ['12345678901234567890', 'MTIzNDU2Nzg5MDEyMzQ1Njc4OTA=', 'MTIzNDU2Nzg5MDEyMzQ1Njc4OTA'],
]

export const inputURLSafe2 = [
  'A',
  'QQ',
  '=QQ',
  'Q=Q',
  'AABB\nAABB',
]

export const inputBase64CharsInvalid = [
  '',
  '!@(^*',
  'AB!!',
  'QQ===',
  '=QQ==',
  '=QQ=',
  '=QQ',
  'AABB\nAABB',
]
export const inputBase64Invalid = [
  0,
  '',
  'Q',
  'QQ',
  'QQQ',
  'QQQQQ',
  'Q=QQ',
  'QQQ==',
  'QQ===',
  '=QQ==',
  '=QQ=',
  '=QQ',
  'AABB\nAABB',
]

export const inputBase64URLCharsInvalid = [
  '',
  '!@(^*',
  'AB!!',
  'QQ===',
  'QQ==',
  '=QQ==',
  '=QQ',
  'QQ+/',
  'AABB\nAABB',
]
export const inputBase64URLInvalid = [
  0,
  '',
  'Q',
  'AABB\nAABB',
]

export const inputURLSafe3: Array<[number[], string]> = [
  [ [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff], '__--_--_--__'],
]


export const inputInvalidEncoderAndDecoder: any[] = [
  1, 'a', false, true, null,
  {},
  (void 0),
]
