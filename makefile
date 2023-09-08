cleanup-docker:
	docker container prune -f
	docker image prune -f
	docker network prune -f

# ui-kit commands

start-ui-kit:
	nx run ui-kit:storybook

build-ui-kit:
	nx run ui-kit:build

test-ui-kit:
	nx run ui-kit:test

lint-ui-kit:
	nx run ui-kit:lint

e2e-ui-kit:
	nx run ui-kit:test-storybook


