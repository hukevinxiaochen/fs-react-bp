# Before you start

If you use `npm` just be sure to delete the yarn.lock file prior to running your first `npm install`.

# Workflow

* `yarn test-dev`
* Use feature branches.
* Write failing tests before hacking on a new feature.
* Commit when tests added.
* Commit again when tests passed.

## Using tape JS

`var test = require('tape');`

To skip tests `test.skip([name]. [opts], cb)` for further off specifications that have yet to be built out or fully thought through.

The only real assertion you need to use is `t.deepEqual(actual, expected, msg)`.

Maybe you'll need `t.throws(fn, expected, msg)`.

For behaviors that require manual testing use `t.fail(msg)` and manually use `t.pass(msg)` when the test passes. Refactor into an automated test when possible.

# Features

## REQUIRED by Fullstack

### In Development
* Has API routes defined
* Tests should be written for all express, sequelize, and react/redux code units that we write.
* Uses redux and react-redux to manage state
  * has dev friendly `redux-logger` middleware too
  * Folks can use either hooks or connect to access redux store in react components
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
  * uses tape JS, with enzyme for react, supertest for our API
* Bundles CSS using webpack and with help of css-loader and style-loader
* Use express as our API server
  * Use logging middleware
  * Use static file serving middleware
  * Use parsing middleware
  * Handle 404s
  * Handle 500s
  * Send index.html
## REQUIRED by Me
* `.eslintrc.js` - using airbnb config.

## Not actually boilerplate

* uses d3 to render some sample GeoJSON in the server folder

# Usage

* Build the react code and other front end assets `build`
* Serve just the static assets in `./public` directory with `start-static`
  * Navigate to `localhost:8080` in the browser and you should see whatever you would expect based on `public/index.html` and `client/app.jsx` (e.g. Hello there! by default).
* You can test
* You can serve just public assets and our index.html command line with the command `http-server`.

# To Do

[] Get Express, Sequelize, and Authentication boilerplate finished

## testing
[x] Write a test script for dev and for production
[x] Write tests
[x] Get test code to be run through babel

# Notes to Fullstack

* boilermaker: 10. Testing: consider that enzyme has instructions that now have you use an adapter rather than have to worry about getting react-test-renderer or addons-test-utils on your own.

# Sources

## Required

TODO: Complete this list later

[mochaArticle]: https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/
[mochaReact]: https://www.robinwieruch.de/react-testing-mocha-chai-enzyme-sinon
[hooksReactRedux]: https://react-redux.js.org/api/hooks
[]: <https://blog.jakoblind.no/css-modules-webpack/>
[]: <https://devcenter.heroku.com/articles/config-vars>
[]: <https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps>
[]: <https://dzone.com/articles/what-you-should-know-about-node-env>
[]: <https://expressjs.com/en/advanced/best-practice-performance.html>

## Optional
