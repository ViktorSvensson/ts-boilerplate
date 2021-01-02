# TypeScript Boilerplate

Minimal Typescript boilerplate.

## Installation

```bash
# Clone repository
git clone https://github.com/ViktorSvensson/ts-boilerplate.git new-project

# Install dependencies
cd new-project
yarn
```

## Scripts

Start a debug session and watch for file changes in `src/**`.

```bash
# First time
yarn global add nodemon
yarn debug

# Second time
yarn debug
```

Run all tests (files named `*.test.ts`).

```bash
# First time
yarn test:setup 
yarn test

# Second time
yarn test
```

Run eslint with the config specified in `.eslintrc.yml`.

```bash
# First time
yarn lint:setup
yarn lint

# Second time
yarn lint
```
