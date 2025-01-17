import { describe, expect, it } from 'vitest'

import { validate } from '../../../../src'
import openapi from './openapi.yaml'

describe('openapi', () => {
  it('passes', async () => {
    const result = await validate(openapi)

    expect(result.valid).toBe(true)
    expect(result.version).toBe('3.0')
  })
})
