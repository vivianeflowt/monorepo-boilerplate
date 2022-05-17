#!/bin/bash

# pnpm install -w --force
# pnpm install -r --force
# pnpm fix
pnpm run build

pnpm -r -p exec pnpm pack --pack-destination /media/vivi/gurudavivi/GURU-CLI/packages/data

wait
# rm -r /home/vivi/.guru/*.tgz

wait
echo " "
echo "cp ./**/*.tgz /home/vivi/.guru"
echo " "