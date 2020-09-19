# To Learn
## react
[x] Learn to use nodemon

### webpack
[ ] what are loaders and why do we need them?

### babel
[x] how does babel work, what are presets? Why do we need them again?

babel is an abstract syntax tree parser and mapper that can take an AST to convert an appropriately formatted document in one language into another. presets are the actual syntax trees that babel can apply to your files. If you want babel to understand react and JSX code and be able to compile it to JavaScript - you need to give it the AST - a kind of data structure that functions like a rule book or codex or decoder or dictionary for babel to use in converting one language to another. Without a preset - babel does not really do anything to data.

## Learning Notes

### REST API

- /resources
  - GET - get a collection of them
  - POST - make a new one
- /resource/{id}
  - GET - get one
  - PUT - update one
  - DELETE - delete one

### Testing

tape gives us test, used to create new tests
it takes an optional name string
and requires a callback that fires with a new test object
once all preceding tests have finished
- convention calls this test object `t`
- we use `expect` because it reads nicely.

for simplicity's sake, we should restrict ourselves to using 
deepEqual and pass and fail

Our testing is done using the mocha framework with chai assertion library. We will use the Expect style of assertions. We also choose to write our tests in a way that uses mocha's BDD style-interface, i.e. using describe to beging a test suite, and it for each unit test.

[LogRocket Mocha and Chai Guide][mochaArticle]

Further reading on style interfaces <https://mochajs.org/#interfaces>.

To test our API we can use supertest with as-needed instances of an express app that uses only the routes we care about testing.

In this way, we can separate the testing of the routes from the production context which contains references to the production database.

In our test module we can include a reference to a test database sequelize model instead, and as long as the Model names match between our route definitions and our test Model object, then we're golden for being able to make assertions about our test database in the service of actually just trying to do a reasonable integration test of our API route with our server.

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

Should I test to see if a background color changed or should I test to see that an action was dispatched?

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

