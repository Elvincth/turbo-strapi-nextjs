

<p align="center">
  <img src="https://user-images.githubusercontent.com/6602723/147492045-644eb08a-a933-42bf-bf30-1485db455da3.png" width="150">
</p>

<h1 align="center">Turborepo + Strapi + Next.js + Docker</h1>

<p align="center">A Turborepo with Strapi v4 (w/ postgres database) + Next.js powered by docker and docker-compose.</h1>

## ⚠️ Prerequisites


Please make sure you have Docker and docker-compose installed in your machine. Please refer here to install them :

1. [Docker](https://docs.docker.com/engine/install/) installation
2. [Docker compose](https://docs.docker.com/compose/install/) installation

## Getting Started

1. Clone this repository :

```bash
git clone https://github.com/Elvincth/turbo-strapi-nextjs
```

2. Change directory

```bash
cd turbo-strapi-nextjs
```

### Setup strapi configuration (`.env`) :

3. Change directory to our strapi application

```bash
cd apps/backend
```

4. Create a .env file which stores strapi and postgres configuration, based on the .env.example file:

```bash
cp .env.example .env
```

5. Define the admin JWT Token

   > In order to make the admin login work you need to define the secret you want to use in `.env` file

Generate a secure token:

```bash
openssl rand 64 | base64 # (linux/macOS users)
# or
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))" # (all users)
```

Add it to your env variables (`apps/backend/.env`):

```bash
ADMIN_JWT_SECRET=token_generated_above
```

## Develop

To develop all apps and packages, run the following command (in the project root):

```bash
docker-compose up -d
```

## Build

To build all apps and packages, run the following commands:

```bash
docker exec -it strapi_nextjs_turbo /bin/sh
```

Then run:

```bash
yarn build
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

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
docker exec -it strapi_nextjs_turbo /bin/sh
```

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

## Credits

- [strapi-dockerize](https://github.com/kevinadhiguna/strapi-dockerize)
- [nextjs-strapi-boilerplate](https://github.com/kevinadhiguna/strapi-dockerize)
