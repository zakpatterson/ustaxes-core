# [ustaxes.org](//ustaxes.org) [![Netlify Status][netlify-badge]][netlify-url] [![Github Latest Release][release-badge]][github-release] [![discord-badge]][discord-url]

If you're new here, you probably want the main [UsTaxes Project](//github.com/ustaxes/ustaxes)

## What is UsTaxes-Forms?

UsTaxes-forms provides all form implementations for [UsTaxes](//github.com/ustaxes/ustaxes).

Work is currently underway to support as many 2020 returns as possible, and to extend the software for 2019 and 2021 as well.

## Supported Income data

Most income and deduction information from the following forms are supported:

- W2
- 1099-INT
- 1099-DIV
- 1099-B
- 1098-E
- 1099-R: support for normal distributions from IRA and pension accounts.
- SSA-1099

So far, this project can attach the following schedules to form 1040:

- Schedule 1 (as to Schedule E and 1098-E data only)
- Schedule 3 (as to excess FICA tax only)
- Schedule 8812
- Schedule B
- Schedule D
- Schedule E

## Supported Credits

- Credit for children and other dependents
- Earned income credit

## Supported states

### Implemented State returns

The states below have been implemented partially. See the `/src/stateForms/<state>/<relevant form>` file for details on unimplemented portions.

- Illinois

### Non-filing states

Users who only have wage income and live in the states below should be able to file taxes using this site, since they do not have state level income tax.

- Alaska
- Florida
- Nevada
- New Hampshire
- South Dakota
- Tennessee
- Texas
- Washington
- Wyoming

## Note on using this project

- This project is built by a growing community. If you notice an error in the outputted PDF or any other error, please submit an issue on the Github issues tab. We appreciate your feedback!

## Contributing

Thank you for taking the time to contribute; let's make tax filing free for everyone! 🎉

To ensure the project is fun for every contributor, please review:

- [Code of conduct](docs/CODE_OF_CONDUCT.md)
- [Contributing guide](docs/CONTRIBUTING.md)

[netlify-badge]: https://api.netlify.com/api/v1/badges/41efe456-a85d-4fed-9fcf-55fe4d5aa7fa/deploy-status
[netlify-url]: https://app.netlify.com/sites/peaceful-joliot-d51349/deploys
[discord-badge]: https://img.shields.io/discord/812156892343828500?logo=Discord
[discord-url]: https://discord.gg/dAaz472mPz
[github-release]: https://github.com/ustaxes/UsTaxes/releases/latest
[release-badge]: https://badgen.net/github/release/ustaxes/ustaxes
