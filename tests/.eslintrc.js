module.exports = {
  "root": true,
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ]
  },
  "parserOptions": {
    "ecmaVersion:" 6,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
    },
  },
}
