# Ui Kit NG development workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Link ui-kit local dist into main workspace (First time only)

```bash
yarn ui:build

cd dist/ui-kit
yarn link

cd ../../
yarn link @pandev-srl/ui-kit-ng
```

## Setup env vars

```bash
cp .env.example .env
source .env
```

## Start library build for development

```bash
yarn ui:watch
```

## Start docs app for development

```bash
yarn docs:start
```

## Start storybook app for development

```bash
yarn storybook:start
```

## Build storybook app for development

```bash
yarn storybook:build
```
