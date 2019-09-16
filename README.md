# vue-jest-external-script-coverage-repro

Reproduction of issue [Statement coverage of external script is 0](https://github.com/vuejs/vue-jest/issues/184)

## Step to reproduce 
```
# step 1. install dependencies and devDependencies
yarn install

# step 2. run unit test
yarn test:unit
```

The terminal will display the following message, and it is easy to notice that the statement coverage of HelloWorldExternalScript.js is 0.
```
------------------------------|----------|----------|----------|----------|-------------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |    66.67 |      100 |      100 |    66.67 |                   |
 HelloWorld.vue               |      100 |      100 |      100 |      100 |                   |
 HelloWorldExternalScript.js  |        0 |      100 |      100 |        0 |                 9 |
 HelloWorldExternalScript.vue |      100 |      100 |      100 |      100 |                   |
------------------------------|----------|----------|----------|----------|-------------------|
```

### More information
This repo uses vue-jest@3.0.5 and jest@23.6.0. I have only tried it on Windows.