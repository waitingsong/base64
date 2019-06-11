/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')
import {
  TextDecoder as NodeTextDecoder,
  TextEncoder as NodeTextEncoder,
} from 'util'

import { ErrorMsg } from '../src/index'
import {
  fromBuffer,
} from '../src/lib/browser'
import { defaultConfig } from '../src/lib/config'

import { input44, input8 } from './config'


const filename = basename(__filename)
const mods = rewire('../src/lib/helper')

describe(filename, () => {
  describe('fromBuffer() works', () => {
    it('with ArrayBuffer input', () => {
      input8.forEach(row => {
        const u8arr = Uint8Array.from(row[0])
        const actual = fromBuffer(u8arr.buffer)
        const expected = row[1]
        assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
      })
    })

    it('with Uint8Array input', () => {
      input8.forEach(row => {
        const u8arr = Uint8Array.from(row[0])
        const actual = fromBuffer(u8arr)
        const expected = row[1]
        assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
      })
    })

    it('with invalid input', () => {
      input44.forEach(value => {
        try {
          // @ts-ignore
          fromBuffer(value)
          assert(false, 'Should throw error, but NOT')
        }
        catch (ex) {
          assert(
            ex.message && ex.message.includes(ErrorMsg.fromArrayBufferInvalidParam),
            ex.message,
          )
        }
      })
    })
  })


})
