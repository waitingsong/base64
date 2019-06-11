/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')

import { ErrorMsg } from '../src/index'
import {
  parseDecodeInputBase64,
  parseEncodeInputString,
  validateEncoder,
} from '../src/lib/helper'

import { input9 } from './config'


const filename = basename(__filename)
const mods = rewire('../src/lib/helper')

describe(filename, () => {
  it('parseDecodeInputBase64() works with invalid input', () => {
    [1, {}, null, true].forEach(input => {
      try {
        // @ts-ignore
        parseDecodeInputBase64(input)
        assert(false, 'Should throw error, but NOT')
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.notString),
          ex.message,
        )
      }
    })

    input9.forEach(input => {
      try {
        // @ts-ignore
        parseDecodeInputBase64(input)
        assert(false, 'Should throw error, but NOT')
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.notValidB64String),
          ex.message,
        )
      }
    })
  })


  describe('validateEncoder() works', () => {
    it('with valid input', () => {
      [1, 'a', {}, false, true, (void 0)].forEach(value => {
        assert(typeof validateEncoder(value) === 'undefined')
      })
    })

    it('with invalid input', () => {
      try {
        // @ts-ignore
        validateEncoder(null)
        assert(false, 'Should throw error, but NOT')
      }
      catch (ex) {
        assert(
          ex.message && ex.message.includes(ErrorMsg.textEncoderUndefined),
          ex.message,
        )
      }
    })
  })

})
