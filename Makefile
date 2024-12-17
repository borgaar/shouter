fresh:
	- docker compose --profile dev -f docker-compose.yml down
	- docker image rm shouter-shouter-dev
	- docker volume rm shouter_shouter-data
	- docker compose --profile dev -f docker-compose.yml up -d
	- sleep 1
	- npx prisma migrate dev

prod:
	- docker compose --profile production -f docker-compose.yml down
	- docker image rm ghcr.io/borgaar/shouter
	- docker compose --profile production -f docker-compose.yml up -d