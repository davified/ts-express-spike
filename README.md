# TypeScript Express Spike

### Steps
```sh
### Linting
# npm install tslint -D

# Generate tslint config
$(npm bin)/tslint --init

# Run lint
npm run tslint
```
# run DB
docker run --name ts-express-spike-mongodb -d -p 127.0.0.1:27017:27017 mongo

## Run tests
```sh
# Generate ts-jest config so that we can use jest to run *.test.ts files
$(npm bin)/ts-jest config:init

# running tests
npm test [-- --watch]
```