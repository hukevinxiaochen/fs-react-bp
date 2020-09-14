# Before you start

If you use `npm` just be sure to delete the yarn.lock file prior to running your first `npm install`.

# Features

* `.eslintrc.js` - using airbnb config.
* `public/index.html` - ready to load a `bundle.js` and mount a react application on `<div id="app"></div>`.
* Uses react
* Mobile friendly with usage of viewport meta tag.
* Bundles assets using `webpack` with a `webpack.config.js` file that works with react using
  * `babel-loader`
  * `@babel/preset-react`
* runs on heroku dyno as long as a valid heroku remote is available
  * uses a deploy script that will deploy to the heroku dyno with `yarn/npm deploy`
* starts in production with `start` script

# Usage

* Build the react code and other front end assets `build`
* Serve just the static assets in `./public` directory with `start-static`
  * Navigate to `localhost:8080` in the browser and you should see whatever you would expect based on `public/index.html` and `client/app.jsx` (e.g. Hello there! by default).
* You can test
* You can serve just public assets and our index.html command line with the command `http-server`.

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
