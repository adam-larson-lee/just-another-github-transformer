# JUST ANOTHER GITHUB TRANSFORMER

Yep. That's exactly what this is. It takes GitHub user and repository data, combines it, transforms it and spits it back out. If that's what you want then you're in the right place.

This application uses [NestJS](https://nestjs.com/) to serve the API. I'm constantly trying to become a better javascript developer and I've been  getting more into [TypeScript](https://www.typescriptlang.org/). NestJS a natural choice for this exercise since it is built with TypeScript and supports it right out of the box. NestJS allows you to very quickly spin up an opinionated, type-safe API.

My primary goal is to (hopefully) impress future employers but I also very much wanted to learn some new tech. This was my first time ever using NestJS!

## Installation

```bash
$ npm i
```

## Running the app

You can start the app with a TOKEN environment variable set so that you aren't rate limited by GitHub. This should be a [personal access token from your GitHub account](https://docs.github.com/en/free-pro-team@latest/rest/guides/getting-started-with-the-rest-api#using-personal-access-tokens). For development you can supply a .env file in the root folder to set TOKEN.

```bash
# development
$ npm run start

# watch
$ npm run start:dev

# production
$ npm run start:prod
```

## Calling the API

The API endpoint is at /users/:username and listens on port 3000. If running locally you can [open your browser](http://localhost:3000/users/adam-larson-lee) to see a sample response. Response data is in the below format. If the user isn't found a 404 status is returned.

```javascript
{
  user_name: string,
  display_name: string,
  avatar: string,
  geo_location: string,
  email: string,
  url: string,
  created_at: timestamp,
  repos: {
    name: string,
    url: string,
  }[];
}
```

## Test

```bash
# unit
$ npm run test

# e2e
$ npm run test:e2e

# coverage
$ npm run test:cov
```

## Lint

```bash
$ npm run lint
```