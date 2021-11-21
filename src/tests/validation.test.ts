import * as arbitraries from './arbitraries'
import * as fc from 'fast-check'
import * as validators from '../data/validate'
import { Address } from '../data'
import log from '../log'
import schema from '../data/validation.json'
import Ajv from 'ajv'
import { isToken } from 'typescript'

const ajv = new Ajv({ schemas: [schema] })

/* eslint-disable @typescript-eslint/no-empty-function */
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
  log.setDefaultLevel(log.levels.SILENT)
})

describe('validation', () => {
  it('should validate json', () => {
    expect(ajv.errors ?? undefined).toEqual(undefined)
  })

  it('should validate some data', () => {
    fc.assert(
      fc.property(arbitraries.primaryPerson, (data) => {
        expect(validators.primaryPerson(ajv)(data)).toEqual(true)
      })
    )
  })

  it('checktype should throw', () => {
    fc.assert(
      fc.property(arbitraries.primaryPerson, (data) => {
        expect(() =>
          validators.checkType(
            {
              ...data,
              address: '123 hi street' as unknown as Address
            },
            validators.primaryPerson(ajv)
          )
        ).toThrow()
      })
    )
  })

  it('checks dependent', () => {
    fc.assert(
      fc.property(arbitraries.dependent, (data) => {
        expect(validators.checkType(data, validators.dependent(ajv))).toEqual(
          data
        )
      })
    )
  })

  it('checkType should not modify correct data', () => {
    fc.assert(
      fc.property(arbitraries.information, (info) => {
        expect(validators.checkType(info, validators.information(ajv))).toEqual(
          info
        )
      })
    )
  })
})
