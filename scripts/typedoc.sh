
#!/bin/bash

clear

rm -rf ./docs 2>/dev/null
mkdir ./docs


npx typedoc --options ./scripts/typedoc.html.js 
npx typedoc --options ./scripts/typedoc.md.js


# npx readme-md-generator -y

# README.md


# A small library based on functional programming and some utilities that extends some functionality of lodash and some other libraries.

# The great motivation for creating this library was sometimes missing some functionalities already ready for my daily use.

# Everything has been designed to be imported so that only what is of interest can be imported.


# https://github.com/gurudavivi/guru-fp/blob/master/docs/modules.md