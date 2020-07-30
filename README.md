# Account Mapper Web Application

This is the Account Mapper Web Application. For the core API
see [rnd/accounts-m-api](https://gitlab.sun-asterisk.com/rnd/accounts-m-api)

## Requirements

Make sure your development enviroment meets the following requirements:

-   Node.js >= 10
-   yarn
-   redis

Use [docker](https://github.com/sun-asterisk-research/docker-php-development) to quickly set up your development environment.

## Setup PHP app

Go to [rnd/expat-management-system](https://gitlab.sun-asterisk.com/rnd/accounts-m-api) and setup your PHP app first

## Use docker

Follow the [instructions](https://gitlab.sun-asterisk.com/rnd/Expat-management-system#use-docker) to set up docker enviroment. Then

```sh
./project sh web
```

Note: when using docker, all scripts and `yarn` commands should be run inside docker container.

## Installation

Install dependencies.

```sh
yarn
```

Make a `.env` file and change environment variables to fit your needs.

```sh
cp .env.example .env
```

Set the following environment variables:

```env

```

Start server in development mode

```sh
yarn dev
```

To build bundle for production

```sh
NODE_ENV=production yarn build
```

To start server with built bundle

```sh
yarn start
```

## Code quality

### ESLint

Before you commit your code, please check your code with _ESLint_

```sh
yarn lint
```

To use autofix

```sh
yarn lint --fix
```

## Deployment

Make sure your default private key (`~/.ssh/id_rsa`) has access to the server and this repository.
To deploy on staging server (develop branch), run:

```sh
yarn deploy staging update
```

To deploy on production server (master branch), run:

```sh
yarn deploy production update
```

Or using npm:

```sh
npm run deploy staging update
npm run deploy production update
```
