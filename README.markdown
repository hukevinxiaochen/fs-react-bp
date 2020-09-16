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

# Notes to Fullstack

* boilermaker: 10. Testing: consider that enzyme has instructions that now have you use an adapter rather than have to worry about getting react-test-renderer or addons-test-utils on your own.
