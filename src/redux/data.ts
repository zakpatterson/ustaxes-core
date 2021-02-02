export enum PersonRole {
  PRIMARY = 'PRIMARY',
  SPOUSE = 'SPOUSE',
  DEPENDENT = 'DEPENDENT',
  EMPLOYER = 'EMPLOYER'
}

export interface Person {
  firstName: string
  lastName: string
  ssid: string
  role: PersonRole
}

export interface Dependent extends Person {
  relationship: string
}

export interface Address {
  address: string
  aptNo?: string
  city: string
  state: string
  zip: string
  foreignCountry?: string
  province?: string
  postalCode?: string
}

export interface PrimaryPerson extends Person {
  address: Address
}

export interface Employer {
  EIN: string
  employerName: string
  address?: Address
}

export interface Refund {
  routingNumber: string
  accountNumber: string
}

export interface IncomeW2 {
  occupation: string
  income: number
  fedWithholding: number
  employer?: Employer
  personRole: PersonRole.PRIMARY | PersonRole.SPOUSE
}

export enum FilingStatus {
  S = 'S',
  MFJ = 'MFJ',
  MFS = 'MFS',
  HOH = 'HOH',
  W = 'W'
}

export const FilingStatusTexts = ({
  [FilingStatus.S]: 'Single',
  [FilingStatus.MFJ]: 'Married Filing Jointly',
  [FilingStatus.MFS]: 'Married Filing Separately',
  [FilingStatus.HOH]: 'Head of Household',
  [FilingStatus.W]: 'Widow(er)'
})

export const filingStatuses = (p: TaxPayer | undefined): FilingStatus[] => {
  let withDependents: FilingStatus[] = []
  let spouseStatuses: FilingStatus[] = []

  if ((p?.dependents ?? []).length > 0) {
    withDependents = [FilingStatus.HOH]
  }
  if (p?.spouse !== undefined) {
    spouseStatuses = [FilingStatus.MFJ, FilingStatus.MFS]
    // HoH not available if married
    withDependents = []
  } else {
    spouseStatuses = [FilingStatus.S]
  }
  return [
    ...spouseStatuses,
    ...withDependents,
    FilingStatus.W
  ]
}

export interface ContactInfo {
  contactPhoneNumber?: string
  contactEmail?: string
}

export interface TaxPayer extends ContactInfo {
  filingStatus?: FilingStatus
  primaryPerson?: PrimaryPerson
  spouse?: Person
  dependents?: Dependent[]
}

export interface Information {
  w2s: IncomeW2[]
  refund?: Refund
  taxPayer?: TaxPayer
}

export interface TaxesState {
  information: Information
}