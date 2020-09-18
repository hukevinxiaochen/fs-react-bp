# Async Week Project

## Not actually boilerplate

* uses d3 to render some sample GeoJSON in the server folder

# Before you start

If you use `npm` just be sure to delete the yarn.lock file prior to running your first `npm install`.

# Features

## REQUIRED by Fullstack

### In Development
* Tests should be written for all express, sequelize, and react/redux code units that we write.
* Uses redux and react-redux to manage state
  * has dev friendly `redux-logger` middleware too
  * Folks can use either hooks or connect to access redux store in react components
* Bundles CSS using webpack and with help of css-loader and style-loader
* Use express as our API server
  * Use logging middleware
  * Use static file serving middleware
  * Use parsing middleware
  * Handle 404s
  * Handle 500s
  * Send index.html
* Use sequelize and postgres together to persist and serve data to our application code
* Have a way for users to authenticate
  * Use some kind of session middleware
  * Use a session store
  * Use passport to help manage sessionsa
  * They can login
  * Sign up
  * Log out
  * Get "me", i.e. themselves
  * OAuth is an option
    * Our application should sign up for OAuth with Google somehow to get some secrets and client IDs

### Completed
* `public/index.html` - ready to load a `bundle.js` and mount a react application on `<div id="app"></div>`.
* Uses react
* Mobile friendly with usage of viewport meta tag.
* Bundles assets using `webpack` with a `webpack.config.js` file that works with react using
  * `babel-loader`
  * `@babel/preset-react`
* runs on heroku dyno as long as a valid heroku remote is available
  * uses a deploy script that will deploy to the heroku dyno with `yarn/npm deploy`
* starts in production with `start` script
* can test the application by running `test` script
  * uses mocha and chai, with enzyme for react

## REQUIRED by Me
* `.eslintrc.js` - using airbnb config.

# Usage

* Build the react code and other front end assets `build`
* Serve just the static assets in `./public` directory with `start-static`
  * Navigate to `localhost:8080` in the browser and you should see whatever you would expect based on `public/index.html` and `client/app.jsx` (e.g. Hello there! by default).
* You can test
* You can serve just public assets and our index.html command line with the command `http-server`.

# To Do

[] Get Express, Sequelize, and Authentication boilerplate finished

# To Learn

## testing
[] Write a test script for dev and for production
[] Write tests
[] Get test code to be run through babel

## react
[] Learn to use nodemon
[] Learn to use webpack-dev-server

### webpack
[] what are loaders and why do we need them?

### babel
[] how does babel work, what are presets? Why do we need them again?

## Learning Notes

### Testing

Our testing is done using the mocha framework with chai assertion library. We will use the Expect style of assertions. We also choose to write our tests in a way that uses mocha's BDD style-interface, i.e. using describe to beging a test suite, and it for each unit test.

[LogRocket Mocha and Chai Guide][mochaArticle]

Further reading on style interfaces <https://mochajs.org/#interfaces>.

#### Asynchronous code

The it callback can take an optional callback function as its first argument. When this is passed Mocha knows that the test is for some async functionality. Conventionally named `done`.

- done must be called for Mocha to terminate the test and proceed to the next test.
- done should be called only once within an it() function
- done is node-style, i.e. it can take an Error instance as first argument
- done with an Error instance causes the test to fail with the given error

#### Test hooks

- before() - once before the first test case in the block
- beforeEach() - once before each test case
- afterEach() - runs after each test case
- after() - runs once after the last test case in the block

each takes a callback function as argument.

optional description as first argument to track errors. Named functions get their names used to describe the hook if nothing else supplied.

*root level* hooks are defined outside the describe block and apply to all test files regardless of where they are defined.

#### Mocha in the browser

One can src client-side mocha test files.

- create a test script called test:browser

#### Testing react components

Use jsdom to create a mock browser-like environment and require it in the test script as a cli option to the mocha command.

### Redux
<https://redux.js.org/introduction/getting-started>

Read and implement later

<https://react-redux.js.org/api/hooks>
<https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/>
<https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/>

### CSS

Here's the recipe once you have css-loader and style-loader configured appropriately for webpack

TODO: Fill this in

If you have time, take a look at CSS modules
<https://blog.jakoblind.no/css-modules-webpack/>

### Environment variables

#### NODE\_ENV

DEVELOPMENT
- more logs
- no views are cached
- more verbose error messages
- front-end is not minified or cached

PRODUCTION
- middleware switch to most efficient code path
- only packages in dependencies are installed - not dev-dependencise
- express will cache view templates, have less verbose messages, css gets cached

# Notes to Fullstack

* boilermaker: 10. Testing: consider that enzyme has instructions that now have you use an adapter rather than have to worry about getting react-test-renderer or addons-test-utils on your own.

# Sources

## Required

TODO: Complete this list later

[mochaArticle]: https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/
[mochaReact]: https://www.robinwieruch.de/react-testing-mocha-chai-enzyme-sinon
[hooksReactRedux]: https://react-redux.js.org/api/hooks
<https://blog.jakoblind.no/css-modules-webpack/>
<https://devcenter.heroku.com/articles/config-vars>
<https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps>
<https://dzone.com/articles/what-you-should-know-about-node-env>
<https://expressjs.com/en/advanced/best-practice-performance.html>

## Optional
