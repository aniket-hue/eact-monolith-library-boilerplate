# React Monorepo Library Boilerplate


This react library boilerplate uses the following:

- [Typescript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Turbo](https://turbo.build/)



## Creating an App


To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-monorepo-react-library-boilerplate my-app
```

### npm

```sh
npm init monorepo-react-library-boilerplate my-app
```

### Yarn

```sh
yarn create monorepo-react-library-boilerplate my-app
```

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
