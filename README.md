# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO
- need to find a way to restrict imports!!
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn cypress:open`
you need to run the server and the client first.

will open the cypress app for you - you can run the e2e tests from them with open browser


`yarn cypress:run` - will run all e2es, headless browser [docs](https://docs.cypress.io/guides/guides/command-line#cypress-run) for all the flags


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

if you want to run production build locally do
yarn global add serve
serve -s build

### `yarn build:staging`
Builds the app for staging to the `build` folder.\
same as production but takes the env variables from .env.staging

run with serve locally


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### a list for a web app


create react app

add apollo

  authenticate request

add tailwind css + copy styles from marketing

router

  home page

  paths page

  title + meta tags

auth - login + logout

  static test user

  test user

  real user

  logout

sentry + mock

optimizely + mock (A/B tests)

analytics + mock

e2e - cypress

  local

  ci -  staging 

  nightly cleanup

unit tests

  component / hook that uses data from apollo

  action that uses apollo client

  some test utils to make it all nicer

code structure

  naming - TBD

  modules (inner/ separate data modules?) - TBD

  maybe some script to add a module

lint + ts configs

  what ever you like 😃

  module boundaries, it would be nice the we could access the mudule-test file as well or put the tests out of the modules

deployment to Vercel

.env files - I added these, not sure wether to push to git

secrets and .env files

ci build

  yarn

  lint

  unit test

  build - ts + build for production

  e2e?

  preview?

Storybook

