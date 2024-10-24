# Development
Steps for staring app on dev enviroment

1. Run data base
`````
docker compose up -d
`````

2. create a copy of .env file then rename this file with the following name: .env.template
3. replace .env variables
4. run ``npm install``
5. run ``npm run dev``
6. run the following commands:
    npx prisma migrate dev
    npx prisma generate
7. run SEED for creating local data base

# Prisma commands
````
npx prisma init
npx prisma migrate dev
npx prisma generate
````


