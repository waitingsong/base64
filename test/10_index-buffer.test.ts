/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import { writeFileSync } from 'fs'
import * as assert from 'power-assert'
import rewire = require('rewire')

import { b64decode, b64encode, b64fromBuffer } from '../src/index'
import { ErrMsg } from '../src/lib/config'

import { input1, input2, input3, input4, input44, input5, input8 } from './config'


const filename = basename(__filename)
const mods = rewire('../src/index')

describe(filename, () => {

  describe('Should b64encode() works under Node.js', () => {

    it('with valid input', () => {
      const ret = input1.concat(input2, input3, input4, input5).map(value => {
        const ret1 = b64encode(value)
        const ret2 = Buffer.from(value.toString()).toString('base64')
        assert(ret1 === ret2, `input: "${ value.toString() }"`)
        return ret1
      })
      // writeFileSync('./base64', "'" + ret.join("',\n'") + "',\n")
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


  describe('Should b64decode() works under Node.js', () => {
    it('with valid input', () => {
      input1.concat(input2, input4, input5).forEach(value => {
        const input = value.toString()
        const b64 = Buffer.from(input).toString('base64')
        const ret = b64decode(b64, 'utf8')
        assert(ret === input, input)
      })
    })

    it('with invalid input', () => {
      input3.forEach(value => {
        const input = value.toString()
        const b64 = Buffer.from(input).toString('base64')
        const ret = b64decode(b64, 'utf8')
        const code = ret.codePointAt(0)

        assert(code && code === 65533, `input: "${input}", code: "${code}"`)
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
