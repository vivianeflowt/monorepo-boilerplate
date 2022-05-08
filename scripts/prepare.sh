
#!/bin/bash

clear

pnpm run build
pnpm run test:cov
pnpm run typedoc

npx readme-md-generator -y



