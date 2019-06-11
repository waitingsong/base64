/// <reference types="mocha" />

import {
  basename,
  join,
} from '@waiting/shared-core'
import * as assert from 'power-assert'
import rewire = require('rewire')

import { fromUint8Array } from '../src/lib/from_buffer'

import { input8 } from './config'


const filename = basename(__filename)
const mods = rewire('../src/lib/to_buffer')

describe(filename, () => {
  it('Should fromUint8Array() works', () => {
    input8.forEach(row => {
      const u8arr = Uint8Array.from(row[0])
      const actual = fromUint8Array(u8arr)
      const expected = row[1]
      assert(actual === expected, `Ensure that ${u8arr} serialise to ${expected}`)
    })
  })

})
