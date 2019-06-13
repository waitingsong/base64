/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import { writeFileSync } from 'fs'
import * as assert from 'power-assert'
import rewire = require('rewire')
import { TextDecoder, TextEncoder } from 'util'

import { b64decode, b64encode, b64fromBuffer, b64urlDecode, b64urlEncode, b64urlFromBuffer } from '../src/index'
import { defaultConfig, ErrMsg } from '../src/lib/config'

import {
  input1,
  input2,
  input3,
  input4,
  input44,
  input5,
  input8,
  inputURLSafe,
  inputURLSafe2,
  inputURLSafe3,
} from './config'


const filename = basename(__filename)
const mods = rewire('../src/index')


describe(filename, () => {
  before(() => {
    defaultConfig.forceBrowser = true
  })
  after(() => {
    defaultConfig.forceBrowser = false
  })

  describe('Should b64encode() works', () => {
    it('with valid input', () => {
      const ret = input1.concat(input2, input3, input4, input5).map(value => {
        const ret1 = b64encode(value, TextEncoder)
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
          b64encode(value, TextEncoder)
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
      input1.concat(input2, input4, input5).forEach(value => {
        const input = value.toString()
        const b64 = Buffer.from(input).toString('base64')
        const ret = b64decode(b64, 'utf8', TextDecoder)
        const ret2 = b64decode(b64, (void 0), TextDecoder)
        assert(ret === input, input)
        assert(ret2 === input, input)
      })
    })

    it('with invalid input', () => {
      input3.forEach(value => {
        const input = value.toString()
        const b64 = Buffer.from(input).toString('base64')
        const ret = b64decode(b64, 'utf8', TextDecoder)
        const ret2 = b64decode(b64, (void 0), TextDecoder)
        const code = ret.codePointAt(0)

        assert(ret === ret2)
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


  describe('Should b64urlEncode() works', () => {
    it('with valid input', () => {
      inputURLSafe.forEach(([str, b64, b64url]) => {
        const ret = b64urlEncode(str, TextEncoder)
        const b64node = Buffer.from(str).toString('base64')
        assert(ret === b64url, `"${ret}" !== "${b64url}"`)
        assert(b64 === b64node, `${b64} !== ${b64node}`)
      })
    })

    it('with invalid input', () => {
      inputURLSafe2.forEach(b64 => {
        try {
          b64urlEncode(b64, TextEncoder)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


  describe('Should b64urlDecode() works', () => {
    it('with valid input', () => {
      inputURLSafe.forEach(([input, b64, b64url]) => {
        const ret1 = b64urlDecode(b64, 'utf8', TextDecoder)
        const ret2 = b64urlDecode(b64url, (void 0), TextDecoder)

        assert(ret1 === ret2, `0: "${ret1}" !== "${ret2}"`)
        assert(ret1 === input, `1: "${ret1}" !== "${input}"`)
      })
    })

    it('with invalid input', () => {
      inputURLSafe2.forEach(b64 => {
        try {
          b64urlDecode(b64, 'utf8', TextDecoder)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(true)
        }
      })
    })
  })


  describe('Should b64urlFromBuffer() works', () => {
    it('with valid input', () => {
      inputURLSafe3.forEach(row => {
        const u8arr = Uint8Array.from(row[0])
        const ret = b64urlFromBuffer(u8arr);

        [...ret].forEach((ch, idx) => {
          const expect = row[1][idx]
          assert(expect === ch, `${expect}, ${ch}, ${idx}`)
        })
      })
    })

  })


})
