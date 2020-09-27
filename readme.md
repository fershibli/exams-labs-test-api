Preparing DB:
- Install postgres
- Create user 'dasatest' with password 'postgres@PSQL.123'
- Create database dasatest
- Run createdb.js with command `node createdb`

Feel free to change any of this details or to create tables by yourself in psql, but keep in mind to update the credentials in 'db/index.js' or just erase the credentials and use env vars according to node-postgres documentation.

