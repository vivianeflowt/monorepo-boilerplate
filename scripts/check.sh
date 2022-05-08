
#!/bin/bash

clear

rm -rf ./dist 2>/dev/null

pnpm run typesync

pnpm run fix:pack
pnpm run fix:format
pnpm run fix:lint

pnpm run test:cov

