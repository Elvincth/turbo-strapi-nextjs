# Turborepo + Strpai + Next.js

A Turborepo with Strapi (w/ postgres database) + Next.js powered by Docker and docker-compose.

<br/>

### ⚠️ Prerequisites of using `docker` and `docker-compose`

Please make sure you have Docker and docker-compose installed in your machine. Please refer here to install them :

1. [Docker](https://docs.docker.com/engine/install/) installation
2. [Docker compose](https://docs.docker.com/compose/install/) installation

<br/>

## Getting Started

1. Go to `apps/backend/config/database.js` :

2. Change directory

```bash
cd turbo-strapi-nextjs
```

### ⚙️ Set up strapi configuration (`.env`) :

#### _DATABASE_HOST_

If you run your database locally or in your computer, fill :<br />

```bash
DATABASE_HOST=127.0.0.1
```

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Next.js](https://nextjs.org) app
- `backend`: [Strapi](https://strapi.io/) app
- `ui`: a stub React component library currently used by `frontend` application
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
