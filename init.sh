
#!/bin/bash

clear


pnpm run typesync

pnpm install -r
pnpm install 

export PATH=$PATH:/packages/cli/bin/guru
export PATH=$PATH:/packages/plugin-run/bin/guru-run