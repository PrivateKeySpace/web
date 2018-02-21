SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

.PHONY: install run build test test-ci typecheck lint lint-enforce ci

install:
	yarn install
	flow-typed install

run:
	react-scripts start

build:
	react-scripts build

test:
	react-scripts test --env=jsdom

test-ci:
	CI=true react-scripts test --env=jsdom --coverage

typecheck:
	flow check ./src/

lint:
	standard "./src/**/*.js" "./src/**/*.test.js"

lint-enforce:
	standard "./src/**/*.js" "./src/**/*.test.js" --fix

ci: lint typecheck test-ci
