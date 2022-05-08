
#!/bin/bash

clear


rm -rf ./node_modules 2>/dev/null
rm -rf ./dist 2>/dev/null
rm -rf ./build 2>/dev/null
rm -rf ./package-lock.json 2>/dev/null
rm -rf ./.npm-cache 2>/dev/null
rm -rf ./yarn.lock 2>/dev/null
rm -rf ./*.tsbuildinfo 2>/dev/null
rm -rf ./docs 2>/dev/null
rm -rf ./coverage 2>/dev/null

pnpm install

# readme-md-generator

# ln -sd ./node_modules/@types/lodash/common typed



# npm-install-peers