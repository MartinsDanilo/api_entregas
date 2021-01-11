## Testes Automatizados

Toda a bateria de testes utiliza o framework [Jest](https://jestjs.io/), tanto teste unitário quanto teste de integração.

### Opções Jest CLI:

Antes de irmos para os scripts existentes, é importante saber o que cada opção significa:

- --passWithNoTests
  - Allows the test suite to pass when no files are found.
- --silent
  - Prevent tests from printing messages through the console.
- --noStackTrace
  - Disables stack trace in test results output.
- --runInBand
  - Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.
- --watch
  - Watch files for changes and rerun tests related to changed files. If you want to re-run all tests when a file has changed, use the --watchAll option instead.
- --config
  - The path to a Jest config file specifying how to find and execute tests. If no rootDir is set in the config, the directory containing the config file is assumed to be the rootDir for the project. This can also be a JSON-encoded value which Jest will use as configuration.
- --findRelatedTests <spaceSeparatedListOfSourceFiles>
  - Find and run the tests that cover a space separated list of source files that were passed in as arguments. Useful for pre-commit hook integration to run the minimal amount of tests necessary. Can be used together with --coverage to include a test coverage for the source files, no duplicate --collectCoverageFrom arguments needed.
- --coverage
  - Indicates that test coverage information should be collected and reported in the output. Optionally pass <boolean> to override option set in configuration.

### Scripts:

Segue abaixo os comandos incluidos no `package.json` e o que fazem:

```bash
# roda todos os testes ('.spec/.test')
# script base para os outros scripts
npm run test

# roda todos os testes, mostrando console.log
npm run test:verbose

# roda os testes unitários ('.spec')
npm run test:unit

# roda os testes unitários ('.spec'), mostrando console.log
npm run test:unit:verbose

# roda os testes de integração ('.test')
npm run test:integration

# roda os testes de integração ('.test'), mostrando console.log
npm run test:integration:verbose

# roda todos os testes, criando os arquivos de cobertura
npm run test:ci
```

### Mocha -> Jest
- `describe/it/expect` -> Mesma coisa, sem importar nada
- `.to.eql` -> `.toBe`

### Links úteis:

- [Testes com MongoDB - em memória](https://jestjs.io/docs/en/mongodb)
