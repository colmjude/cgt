#!/usr/bin/env bash
# Used by docker-compose to
#- make node_modules available to the app
#- run the app
cp -a /tmp/node_modules . && PORT=3001 node start.js
