import { describe, expect, it } from 'vitest'

import { resolve } from './resolve'

describe('resolve', async () => {
  it('resolves an OpenAPI 3.1.0 file', async () => {
    const result = await resolve(`{
      "openapi": "3.1.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.schema.info.title).toBe('Hello World')
  })

  it('resolves an OpenAPI 3.0.0 file', async () => {
    const result = await resolve(`{
      "openapi": "3.0.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.schema.info.title).toBe('Hello World')
  })

  it('resolves an Swagger 2.0 file', async () => {
    const result = await resolve(`{
      "swagger": "2.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.schema.info.title).toBe('Hello World')
  })

  it('returns version 3.1', async () => {
    const result = await resolve(`{
      "openapi": "3.1.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.version).toBe('3.1')
  })

  it('returns version 3.0', async () => {
    const result = await resolve(`{
      "openapi": "3.0.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.version).toBe('3.0')
  })

  it('returns version 2.0', async () => {
    const result = await resolve(`{
      "swagger": "2.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.errors).toStrictEqual([])
    expect(result.version).toBe('2.0')
  })

  it('doesn’t return version 4.0', async () => {
    const result = await resolve(`{
      "openapi": "4.0",
      "info": {
          "title": "Hello World",
          "version": "1.0.0"
      },
      "paths": {}
    }`)

    expect(result.version).toBe(undefined)
  })
})

it('resolves a simple reference', async () => {
  const openapi = {
    openapi: '3.1.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    paths: {
      '/test': {
        get: {
          responses: {
            '200': {
              // TODO: This is valid in @apidevtools/swagger, but not with our implementation
              description: 'foobar',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Test',
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Test: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
          },
        },
      },
    },
  }

  const result = await resolve(openapi)

  expect(result.errors).toStrictEqual([])

  // Original
  expect(
    // @ts-ignore
    result.specification.paths['/test'].get.responses['200'].content[
      'application/json'
    ].schema,
  ).toEqual({
    $ref: '#/components/schemas/Test',
  })

  // Resolved references
  expect(
    // @ts-ignore
    result.schema.paths['/test'].get.responses['200'].content[
      'application/json'
    ].schema,
  ).toEqual({
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  })
})
