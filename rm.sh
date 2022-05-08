#!/bin/bash

clear

find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
find . -name 'lib' -type d -prune -print -exec rm -rf '{}' \;
find . -name 'dist' -type d -prune -print -exec rm -rf '{}' \;
find . -name 'build' -type d -prune -print -exec rm -rf '{}' \;
find . -name 'coverage' -type d -prune -print -exec rm -rf '{}' \;



npm install


