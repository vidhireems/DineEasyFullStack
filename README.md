# DineEasy

Automate DB steps:
createUpdateDb.ts allows you to update the database automatically without the need to use mongosh explicitly and manually.

1. Ensure that the mongod server is on and listening on localhost with port 27017.
2. Ensure that adminDbUser.js has all the required users with required priviliges.
3. All the other files in Createdb folder are meant to create and/or update collections in the database.
4. Ensure that all the files in the Createdb folder are present in createUpdateDb.ts.
5. Compile createUpdateDb.ts using 'tsc createUpdateDb.ts'
6. Run the auto-generated file createUpdateDb.js using 'node createUpdateDb.js'

Run DB scripts:
    To test DB connection in localhost:
        `node DbConnection.js --env localhost`
    To test DB connection in cloud db:
        `node DbConnection.js`
    To populate DB collections in localhost:
        `node createDatabase.js --env localhost`
    To populate DB collections in cloud db:
        `node createDatabase.js`

Build, Run and Deploy:

    Development mode:
        `npm run start:local`  -- Builds and runs both Backend and Frontend in development mode
        `npm run test:local` -- Runs Tests locally

    Production mode:
        `npm run build:prod`  -- Builds both Backend and Frontend in production mode
        `npm start`      -- Runs in production mode locally.
        `npm run test` -- Runs Tests for cloud deployed website
    
    To Deploy on Azure:
        `npm run build:prod` -- Builds in production mode and populates the dist folder
        `git push azure main:master`

Github repository update steps:

1. `git checkout main`
2. `git pull`
3. `git checkout "your_branch_name"`
4. `git merge main`
    -- Integrate your code changes
5. `npm run build:prod`
    -- Ensure that .gitignore does not track 
        1. node_modules 
        2. frontend/.angular  
        3. frontend/node_modules
6. ` git add .`
7. `git commit -m "Any message you want to add"`
8. `git push`
