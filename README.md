
Requirements: node + npm (built and tested with node 8, will probably work on 4+).

demo.sh will bootstrap environment, verify tests pass, and demonstrate a request/response:

```sh
./demo.sh
```

Manual bootstrap:

```sh
npm install
npm test
node index.js
```

Usage post a comma-separated list of URLs to the endpoint and receive the set of non-numeric characters:

```sh
curl \
  -X POST \
  -d 'https://github.com/,https://stackoverflow.com' \
  http://localhost:3000/chracter-collector
```
