/// <reference types="mocha" />

// tslint:disable-next-line
import * as assert from 'power-assert'

import {
  b64decode,
  b64encode,
} from '../src/index'


const filename = '10_encoding.test.ts'

describe(filename, () => {
  const fnName = 'b64decode'

  describe(`Should ${fnName}() works`, () => {
    it('with various encoding', () => {
      ['A', '1', 'ascii0123'].forEach(str => {
        const input = str.toString()
        const base64 = b64encode(str)

        const s1 = b64decode(base64, 'utf-8')
        assert(s1 === input, `input: "${input}" expect:"${s1}"`)

        const s2 = b64decode(base64, 'gbk')
        assert(s2 === input, `input: "${input}" expect:"${s2}"`)

        const s3 = b64decode(base64, 'gb18030')
        assert(s3 === input, `input: "${input}" expect:"${s3}"`)

        const s4 = b64decode(base64, 'iso-8859-2')
        assert(s4 === input, `input: "${input}" expect:"${s4}"`)
      })
    })
  })

})
