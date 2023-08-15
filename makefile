up-nx-base:
	docker compose up --build nx-base

build-nx-base:
	docker compose build nx-base

bash-nx-base:
	docker compose run --build nx-base bash

up-monorepo:
	docker compose up --build monorepo

build-monorepo:
	docker compose build monorepo

bash-monorepo:
	docker compose run --build monorepo bash