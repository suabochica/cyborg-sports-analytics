#!/bin/bash

## JavaScript Project Skeleton
## ---------------------------

## Root files
touch webpack.config.js
touch package.json
touch eslint.yml
touch sass-lint.yml
touch .nvmrc
touch .gitignore

## Root folders
mkdir -p dist
mkdir -p src/{assets,styles,scripts,templates}

## dev files
touch src/index.html
touch src/styles/app.sass
touch src/scripts/app.js
