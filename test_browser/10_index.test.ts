/// <reference types="mocha" />

import * as assert from 'power-assert'

import { b64decode, b64encode, b64fromBuffer } from '../src/index'
import { ErrMsg } from '../src/lib/config'

import {
  base1,
  base2,
  base3,
  input1,
  input2,
  input4,
  input44,
  input8,
} from './config'


const filename = '10_index.test.ts'

describe(filename, () => {

  describe('Should b64encode() works', () => {
    it('with valid input', () => {
      const baseArr = base1.concat(base2)
      input1.concat(input2).forEach((input, idx: number) => {
        const ret = b64encode(input)
        const expect = baseArr[idx]
        assert(ret === expect, `input: "${ input.toString() }", expect: "${expect}"`)
      })

      input4.forEach(input => {
        const ret = b64encode(input)
        const str = b64decode(ret)
        assert(str === input.toString(), `input: "${ input.toString() }", expect: "${str}"`)
      })
    })

    it('with invalid input', () => {
      input44.forEach(value => {
        try {
          // @ts-ignore
          b64encode(value)
          assert(false, `Should throw error, but NOT. str:"${value}"`)
        }
        catch (ex) {
          assert(ex.message.includes(ErrMsg.encodeInvalidParam), ex.message)
        }
      })
    })

  })


  describe('Should b64decode() works', () => {
    it('with valid input', () => {
      const inputArr = input1.concat(input2)

      base1.concat(base2).forEach((b64, idx) => {
        const ret = b64decode(b64)
        const expect = inputArr[idx].toString()
        assert(expect === ret, `${ret}, ${b64}, ${expect}, ${idx}`)
      })
    })

    it('with invalid input', () => {
      base3.forEach(str => {
        const ret = b64decode(str)
        const code = ret.codePointAt(0)
        assert(code && code === 65533, `input: "${str}", code: "${code}"`)
      })
    })
  })


  describe('Should b64fromBuffer() works', () => {
    it('with valid input', () => {
      input8.forEach(row => {
        const u8arr = Uint8Array.from(row[0])
        const actual = b64fromBuffer(u8arr)
        const expected = row[1]
        assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
      })
    })
  })


})
