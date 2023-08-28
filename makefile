build-all:
	docker compose build monorepo
	docker compose build ui-kit

bash-monorepo:
	docker compose run --build monorepo bash

cleanup-docker:
	docker container prune -f
	docker image prune -f
	docker network prune -f