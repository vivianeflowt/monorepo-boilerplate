#!/bin/bash

pnpm -r -p exec rm -rf ./node_modules 2>/dev/null
pnpm -r -p exec rm -rf ./dist 2>/dev/null
pnpm -r -p exec rm -rf ./build 2>/dev/null
pnpm -r -p exec rm -rf ./docs 2>/dev/null
pnpm -r -p exec rm -rf ./coverage 2>/dev/null
pnpm -r -p exec rm -rf ./temp 2>/dev/null
pnpm -r -p exec rm -rf ./debug 2>/dev/null
pnpm -r -p exec rm -rf ./package-lock.json 2>/dev/null
pnpm -r -p exec rm -rf ./yarn.lock
pnpm -r -p exec rm -rf ./*.log 2>/dev/null
pnpm -r -p exec rm -rf ./.npm-cache 2>/dev/null
pnpm -r -p exec rm -rf ./*.tsbuildinfo 2>/dev/null
pnpm -r -p exec rm -rf ./tsconfig.build.tsbuildinfo 2>/dev/null
pnpm -r -p exec rm -rf ./tsconfig.tsbuildinfo 2>/dev/null

# rm -rf ./pnpm-lock.yaml 2>/dev/null

pnpm install -w
pnpm install -r

# pnpm --filter ./utils/cli run build

# readme-md-generator
# ln -sd ./node_modules/@types/lodash/common typed

