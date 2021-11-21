import { createGenerator } from 'ts-json-schema-generator'
import fs from 'fs'

export const saveSchema = (
  inFile: string,
  outFile: string,
  schemaId: string
): void => {
  const config = {
    schemaId,
    path: inFile,
    tsconfig: 'tsconfig.json',
    type: '*' // Or <type-name> if you want to generate schema for that one type only
  }

  const schema = createGenerator(config).createSchema(config.type)
  const schemaString = JSON.stringify(schema, null, 2)
  fs.writeFile(outFile, schemaString, (err): void => {
    if (err) throw err
  })
}

const isMain = require.main === module

if (isMain) {
  saveSchema('src/data/index.ts', 'src/data/validation.json', 'ustaxes-forms')
}
