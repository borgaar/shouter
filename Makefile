fresh:
	- docker compose -f docker-compose.yml down
	- docker container rm shouter-web-app
	- docker image rm shouter-web-app
	- docker network create shouter_network
	- docker compose -f docker-compose.yml up -d