# DASA exams and labs API

## Preparing DB:
- Install postgres
- Create user 'dasatest' with password 'postgres@PSQL.123'
- Create database dasatest
- Run createdb.js with command `node createdb`

_Feel free to change any of this details or to create tables by yourself in psql, but keep in mind to update the credentials in `db/index.js` or just erase the credentials and use env vars according to [node-postgres documentation](https://node-postgres.com/features/connecting)._

## Running server
Inside the root directory of the project, run the following commands:
- `npm i` for the first run, or if the directory `node_modules` is missing
- `npm start`