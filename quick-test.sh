#!/bin/sh

[ -d node_modules ] || npm install || exit

npm test || exit

node index.js &
pid=$!
[ -z $pid ] && exit
sleep 1

curl \
  -X POST \
  -d 'noop.url,https://stackoverflow.com/questions/13883166/uncatchable-chucknorrisexception,https://en.wikipedia.org/wiki/Grand_Canyon' \
  http://localhost:3000/weird-echo

kill "$pid"
