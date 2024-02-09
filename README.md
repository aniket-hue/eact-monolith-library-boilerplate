# React Monolith Library Boilerplate

This react library boilerplate uses the following:

- [Typescript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Storybook](https://storybook.js.org/)
- [Lerna](https://lerna.js.org/)

## Setup

1. Edit the `package.json` file. Set you app's name, description, version, author, homepage, bugs, and repository fields with the correct information.
1. Run `yarn` to add all the project's dependencies.
1. You package.json file version should always be 0.0.0 since Semantic Release will automatically set this upon publishing.

## Basic Folder Structure

```
├── .storybook
├── packages
│   ├── Example
|   |   ├── lib
|   |   |   ├── example.tsx
|   |   |   ├── helpers.ts
|   |   |   ├── index.ts
|   |   |   ├── types.ts
|   |   ├── package.json
|   |   ├── tsconfig.json
├── LICENSE
├── package.json
├── rollup.config.json
├── lerna.json
├── README.md
```
