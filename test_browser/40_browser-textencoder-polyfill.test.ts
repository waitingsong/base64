/// <reference types="mocha" />

import * as assert from 'power-assert'

import { b64decode, b64encode, b64fromBuffer } from '../src/index'
import { defaultConfig, ErrMsg } from '../src/lib/config'

import {
  base1,
  base2,
  base3,
  input1,
  input2,
  input4,
  input8,
  isEdge,
  isIE,
} from './config'
// https://github.com/inexorabletash/text-encoding
// @ts-ignore
import * as PF from './encoding.js'


const filename = '40_browser-textencoder-polyfill.test.ts'

const Encoder = PF.TextEncoder
const Decoder = PF.TextDecoder

console.info(`
To running this case for testing polyfill of TextEncoder/TextDecoder:
  1. unzip polyfill.7z
  2. remove ".only" from "describe.only(.." in the file "40_browser-textencoder-polyfill.test.ts"`,
)

describe.skip(filename, () => {
  before(() => {
    defaultConfig.forceBrowser = true
  })
  after(() => {
    defaultConfig.forceBrowser = false
  })

  describe('Should b64encode() works', () => {
    it('with valid input', () => {
      const baseArr = base1.concat(base2)
      input1.concat(input2).forEach((input, idx: number) => {
        const ret = b64encode(input, Encoder)
        const expect = baseArr[idx]
        assert(
          ret === expect,
          `input: "${ input.toString() }", expect: "${expect}", got: "${ret}", index: ${idx}`)
      })

      input4.forEach(input => {
        const ret = b64encode(input, Encoder)
        const str = b64decode(ret, 'utf8', Decoder)
        assert(str === input.toString(), `input: "${ input.toString() }", expect: "${str}", got: "${ret}"`)
      })
    })
  })


  describe('Should b64decode() works', () => {
    it('with valid input', () => {
      const inputArr = input1.concat(input2)

      base1.concat(base2).forEach((b64, idx) => {
        const ret = b64decode(b64, 'utf8', Decoder)
        const expect = inputArr[idx].toString()
        assert(expect === ret, `${ret}, ${b64}, ${expect}, ${idx}`)
      })
    })

    it('with invalid input', () => {
      base3.forEach(str => {
        const ret = b64decode(str, 'utf8', Decoder)
        const code = ret.codePointAt(0)
        assert(code && code === 65533, `input: "${str}", code: "${code}"`)
      })
    })
  })


  describe('Should b64fromBuffer() works', () => {
    it('with valid input', () => {
      input8.forEach(row => {
        const u8arr = isIE || isEdge
          ? new Uint8Array(row[0])
          : Uint8Array.from(row[0])
        const actual = b64fromBuffer(u8arr)
        const expected = row[1]
        assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
      })
    })
  })


})
