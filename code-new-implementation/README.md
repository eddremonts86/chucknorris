#


## Installation

```shell
# Install dependencies
$ npm i


## Commands

### Development

```shell
$ npm run serve
```

## Future plan

- Integrate husky for git hooks, format and checks before committing
- Add tests, Vitest(UniTest) and Cypres(E2E)
- Add PWA support
- Add email subscription support(home page)
- Add dark mode support(btn toggle), system already support OS preference and browser preference color theme
- Add a 404 page
- Add error dialog or alert on api request error, at the moment we support silence errors
- Split store in multiples modules (at teh moment we only have Jokes feature module, so we have it in the index.js store but this will change when we introduce the error handling components fx.)
- Add a loading spinner on api request
- Add a loading spinner on page load and loading spinner on page transition
- Add github actions to run tests and build
- Add a github action to deploy to github pages or in netlify
- Add support for TypeScript and add types to the project
- Create proper UI components using Tailwindcss
- Create cr-img component to handler properly on get images errors(fx. this api endpoint should have a image per joke but link is broke, we should show a placeholder image in that cases )
