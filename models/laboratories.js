const db = require('../db');

module.exports = {
    create: () => db.query(`
        CREATE TYPE laboratory_status AS ENUM (
            'ativo', 'inativo'
        );

        CREATE TABLE laboratories(
            id SERIAL PRIMARY KEY,
            name VARCHAR(512) NOT NULL,
            address VARCHAR(1024) NOT NULL,
            status laboratory_status DEFAULT 'ativo',
        );
    `),
}