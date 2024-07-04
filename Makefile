# Makefile for managing Docker containers

# Variables
DOCKER_COMPOSE = docker-compose

.PHONY: up down destroy bash

# Starts the container and every service in it
up:
	$(DOCKER_COMPOSE) up

# Stops the running container
down:
	$(DOCKER_COMPOSE) down

# Destroys/deletes the container and all of its services on docker
destroy:
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

# Logs into the docker container bash as root
bash:
	$(DOCKER_COMPOSE) exec app sh