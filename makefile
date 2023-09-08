build-all:
	docker compose build monorepo
	docker compose build ui-kit

cleanup-docker:
	docker container prune -f
	docker image prune -f
	docker network prune -f

# Monorepo Commands
bash-monorepo:
	docker compose run --build monorepo bash

build-monorepo:
	docker compose build monorepo

# Ui-Kit Commands
up-ui-kit:
	docker compose up --build ui-kit

build-ui-kit:
	docker compose build ui-kit
