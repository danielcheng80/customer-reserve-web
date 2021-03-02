#!/bin/bash

appName=$(cat service.txt)

docker run -dt --rm \
  --name "$appName" \
  -p 3000:3000 \
  -u "node" \
  -v "$PWD":/home/node/app \
  -w /home/node/app \
  node "$@"
