fresh:
	- docker compose --profile dev -f docker-compose.yml down
	docker compose --profile dev -f docker-compose.yml up -d --build
	- sleep 2
	- pnpx prisma migrate dev

db:
	- docker compose --profile dev -f docker-compose.yml down database
	-	docker volume rm shouter_shouter_data
	docker compose --profile dev -f docker-compose.yml up -d database
	- sleep 2
	- pnpx prisma migrate dev

prod:
	- docker compose --profile production -f docker-compose.yml down
	- docker image rm ghcr.io/borgaar/shouter:latest
	- docker compose --profile production -f docker-compose.yml up -d