# setup-playwright

setup playwright dependencies in [`GitHub Actions`](https://github.com/features/actions) & [`nektos/act`](https://github.com/nektos/act)

this is a [tiny wrapper](./src/index.js) around [`microsoft/playwright-github-action`](https://github.com/microsoft/playwright-github-action).

## roadmap

currently this only brings support for running `headless` `chromium` inside `debian buster`

other browsers and "headful" environment contributions are welcome! :smile:

## versioning

this action is only available via `@:hash` or `@main` versions.

once this action has proper testing I'll use version tags :see_no_evil:

## usage

```yml
# .github/workflows/test.yml
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
      - uses: leonardodino/setup-playwright@main
      - run: yarn --frozen-lockfile
      - run: yarn test
```
