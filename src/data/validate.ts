import Ajv, { DefinedError, ValidateFunction } from 'ajv'
import log from '../log'
import * as types from './index'

// We will simply throw a runtime error if the data does not
// validate against the schema.definitions.
export const checkType = <A>(data: A, validate: ValidateFunction<A>): A => {
  if (validate === null || validate === undefined) {
    log.error('validate is null or undefined')
    log.error('data was ')
    log.error(data)
    throw new Error('No validation function provided')
  }
  validate(data)
  if (validate.errors !== null) {
    // Taken from doc example: The type cast is needed to allow user-defined keywords and errors
    // You can extend this type to include your error types as needed.

    const errs = validate.errors as DefinedError[]

    for (const err of errs) {
      log.error(err.message)
    }

    log.error(validate.errors)
    log.error(data)

    throw new Error('Validation failed')
  }

  return data
}

const get =
  <A>(name: string) =>
  (ajv: Ajv): ValidateFunction<A> => {
    const found = ajv.getSchema(name) as ValidateFunction<A> | undefined
    if (found === undefined) {
      console.info(ajv)
      throw new Error(`Attempted to get schema name ${name}, not found`)
    }
    return found
  }

export const getShort =
  <A>(shortName: string) =>
  (ajv: Ajv): ValidateFunction<A> =>
    get<A>(`#/definitions/${shortName}`)(ajv)

export const personRole = getShort<types.PersonRole>('PersonRole')
export const contactInfo = getShort<types.ContactInfo>('ContactInfo')
export const Address = getShort<types.Address>('Address')
export const accountType = getShort<types.AccountType>('AccountType')
export const employer = getShort<types.Employer>('Employer')
export const filingStatus = getShort<types.FilingStatus>('FilingStatus')
export const primaryPerson = getShort<types.PrimaryPerson>('PrimaryPerson')
export const spouse = getShort<types.Spouse>('Spouse')
export const person = getShort<types.Person>('Person')
export const dependent = getShort<types.Dependent>('Dependent')
export const intData = getShort<types.F1099IntData>('F1099IntData')
export const bData = getShort<types.F1099BData>('F1099BData')
export const income1099Int = getShort<types.Income1099Int>('Income1099Int')
export const income1099B = getShort<types.Income1099B>('Income1099B')
export const supported1099 = getShort<types.Supported1099>('Supported1099')
export const incomeW2 = getShort<types.IncomeW2>('IncomeW2')
export const estimatedTaxPayments = getShort<types.EstimatedTaxPayments>(
  'EstimatedTaxPayments'
)
export const refund = getShort<types.Refund>('Refund')
export const taxPayer = getShort<types.TaxPayer>('TaxPayer')
export const information = getShort<types.Information>('Information')
export const property = getShort<types.Property>('Property')
export const propertyType = getShort<types.PropertyType>('PropertyType')
export const f1098e = getShort<types.F1098e>('F1098e')
export const responses = getShort<types.Responses>('Responses')
export const stateResidency = getShort<types.StateResidency>('StateResidency')

export const validators = (ajv: Ajv) => ({
  personRole: personRole(ajv),
  contactInfo: contactInfo(ajv),
  Address: Address(ajv),
  accountType: accountType(ajv),
  employer: employer(ajv),
  filingStatus: filingStatus(ajv),
  primaryPerson: primaryPerson(ajv),
  spouse: spouse(ajv),
  person: person(ajv),
  dependent: dependent(ajv),
  intData: intData(ajv),
  bData: bData(ajv),
  income1099Int: income1099Int(ajv),
  income1099B: income1099B(ajv),
  supported1099: supported1099(ajv),
  incomeW2: incomeW2(ajv),
  estimatedTaxPayments: estimatedTaxPayments(ajv),
  refund: refund(ajv),
  taxPayer: taxPayer(ajv),
  information: information(ajv),
  property: property(ajv),
  propertyType: propertyType(ajv),
  f1098e: f1098e(ajv),
  responses: responses(ajv),
  stateResidency: stateResidency(ajv)
})
