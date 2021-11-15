# UsTaxes-Forms Contributing Guide

This project has the same set of Guidelines as the [USTaxes](//github.com/ustaxes/ustaxes) project.

Before contributing please make sure to take a moment to read through the [Code of Conduct](CODE_OF_CONDUCT.md), as well as relevant documentation for the contribution you intend to make:

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Guide](#development-guide)

## Maintaining team

- [Aidan Grimshaw](http://github.com/thegrims)
- [Zak Patterson](http://github.com/zakpatterson)

## Issue Reporting Guidelines

- The issue list of this repo is for bug reports and feature requests. Please come to the [Discord chat](https://discord.gg/dAaz472mPz) with general questions you may have.

- If your issue is resolved but still open, please close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

- Generally, there are many features still remaining to produce a valid 1040 for most people. We hope you will view this project in light of your individual circumstances and expertise and contribute accordingly! For example, if you have a certain type of income or receive a certain credit or deduction, and those are not yet implemented, we would happily assist you in implementing those features.

## Pull Request Guidelines

- For code security, we require signed commits. If you haven't set up signed commits yet, please do the following:

  - Follow [this Github tutorial](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)

  - To ensure all your commits are signed going forward, `git config --global commit.gpgsign true`,

  - If you have unsigned commits that you would like to sign, you can do so by rebasing. `git rebase master`, followed by `git commit --amend` to redo each commit on the branch.

- The only requirement is that your PR is well described and your intentions are clearly communicated.

- If adding new feature, provide some clear reason to add this feature.

- If fixing a bug:

  - If you are resolving a special issue, add `Fixes: #xxx` (#xxx is the issue id) in your PR body. When your PR is merged, the maintainer will move this information into the final commit message for our release log.
  - Provide detailed description of the bug in the PR, or link to an issue that does.

- These are just some formatting suggestions, we won't call you out for not following them:

  - Start commits with a capital letter and imperative mood, no period at the end.
  - Each commit first line should be max 50 characters, followed by a blank line.
  - Wrap following lines at 80 characters.
  - Include as much detail as you need in the following lines.
  - Github PR title style is the same as commit first line style.

- It's OK to have multiple small commits as you work on the PR - we apply squash merges to all PRs at the end. In particular, you are free to rebase your commits so long as your pull request is in draft status. As soon as you take it out of draft status, request a review, or receive a review on your pull request, please do not rebase or force push.

## Development Guide

### General Setup

First, [join our Discord server](https://discord.gg/dAaz472mPz) and let us know that you want to contribute. This way we can point you in the right direction and help ensure your contribution will be as helpful as possible.

1. To set up your machine for development, review the [Architecture doc](ARCHITECTURE.md), for required links to set up NPM 6 and Rust.

1. Next, fork and clone this repo.

1. Run `npm ci` to install the package versions referenced in `package-lock.json`. If your feature requires a new dependency, add it using `npm install <package-name>@<version>` to avoid affecting other dependencies in `package-lock.json`.

## License

UsTaxes is an AGPL-licensed open source project. We think this choice is important for a few reasons

- If anyone wants to use the software for any reason, they are welcome to.
- If anyone wants to sell the software, they can, but they have to provide all the source so users can build the project themselves.
- If someone wants to improve on the software and sell that, they can, but they also have to provide the source for all their improvements for free.

We believe this choice will help you know your contributions are valued and will be used responsibly.
