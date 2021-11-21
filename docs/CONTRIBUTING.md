# UsTaxes-Forms Contributing Guide

This project has the same set of Guidelines as the [USTaxes](//github.com/ustaxes/ustaxes) project. Please review that document in addition to the supplemental information here.

## Guide for contributing a new form implementation

- Add new data schema if needed
  - Interfaces in [src/redux/data](../src/data/index.ts) may need to be expanded if additional data from the user is required
- If there is a new attachment to the 1040:

  - The blank form goes in `public/forms/`. The locations of all supported attachments and logic about what attachments are required, is in [fillPdf.ts](//github.com/ustaxes/ustaxes-forms/tree/main-2020/src/pdfFiller/fillPdf.ts).
  - The data model for the PDF goes in [irsForms](//github.com/ustaxes/ustaxes-forms/tree/main-2020/src/irsForms), and implements the `Form` interface as above. There is a script we use to generate a base implementation of the form. To generate this base implementation, run

  ```
  npm run formgen ./public/forms/<name-of-form>.pdf > ./src/irsForms/<name-of-form>.ts
  ```

  This will provide a function for each field in the PDF. At this point you should have a compilable file that needs the implementations for all those functions filled in.

## License

UsTaxes is an AGPL-licensed open source project. We think this choice is important for a few reasons

- If anyone wants to use the software for any reason, they are welcome to.
- If anyone wants to sell the software, they can, but they have to provide all the source so users can build the project themselves.
- If someone wants to improve on the software and sell that, they can, but they also have to provide the source for all their improvements for free.

We believe this choice will help you know your contributions are valued and will be used responsibly.
