# Private Key Space Wallet - Web

[![CircleCI](https://circleci.com/gh/PrivateKeySpace/web/tree/develop.svg?style=shield)](https://circleci.com/gh/PrivateKeySpace/web/tree/develop)

Web front-end for Core wallet service.

## Usage

Setting up:
  * install [nvm](https://github.com/creationix/nvm) - node.js version manager (recommended)
  * install [node.js](https://nodejs.org/en/) - JavaScript runtime
  * install [yarn](https://yarnpkg.com/) - node.js package manager
  * copy `.env.example` into `.env` and edit for desired build/run configuration

Desired `node.js` version is indicated by `.nvmrc` file.
Install it with `nvm`:
```bash
$ nvm install
```

Following commands expect that desired node.js version is set as default version used system-wide.

Install dependencies:
```bash
$ make install
```

Run development server:
```bash
$ make run
```

Create production build:
```bash
$ make build
```

Run tests in interactive mode:
```bash
$ make test
```

Run tests in CI mode:
```bash
$ make test-ci
```

Run lint and display errors:
```bash
$ make lint
```

Run lint and fix errors:
```bash
$ make lint-enforce
```

## Licence

[MIT](http://en.wikipedia.org/wiki/MIT_License)
