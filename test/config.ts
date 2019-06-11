import {
  baseChars,
} from '../src/lib/config'


export const input1: Array<string | number | bigint> = [
  baseChars,
  'a\'b"c<d>e&f=g/[].,:;+-_`~!@#$%^&*(){}*\\ ',
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

export const input5: Array<bigint> = [
  12345678901234567890n,
  -12345678901234567890n,
  1n,
  -1n,
  0n,
  -0n,
]
export const base5: string[] = [
  'MTIzNDU2Nzg5MDEyMzQ1Njc4OTA=',
  'LTEyMzQ1Njc4OTAxMjM0NTY3ODkw',
  'MQ==',
  'LTE=',
  'MA==',
  'MA==',
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
