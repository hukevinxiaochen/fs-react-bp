#!/usr/bin/env bash

# To be run from a local dev environment
# as a yarn or npm deploy as executable shell script
# with permission bits set to 755 and will create a temporary branch
# called deploy, forcibly add otherwise ignored bundled build files,
# commit even without anything changing with message 'Deploying',
# and push to heroku's main branch the stuff on the local branch.

# Specify that this script should exit if any single line fails
# So we set the `-e` flag
set -e

# This `trap` command is like a shell script hook that runs
# clean_up_at_exit to delete the deploy branch
# just at EXIT of the whole script
function clean_up_at_exit {
  # return to main branch
  git checkout main

  # remove the deploy branch
  git branch -D deploy
}
trap clean_up_at_exit EXIT

git checkout -b deploy

webpack --mode production

git add -f public/bundle.js

git commit --allow-empty -m 'Deploying'

git push --force heroku deploy:main
