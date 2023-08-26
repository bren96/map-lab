build-all:
	docker compose build monorepo
	docker compose build ui-kit

build-monorepo:
	docker compose build monorepo

bash-monorepo:
	docker compose run --build monorepo bash

up-ui-kit:
	docker compose up --build ui-kit

build-ui-kit:
	docker compose build ui-kit
