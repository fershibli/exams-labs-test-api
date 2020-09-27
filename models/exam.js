const db = require('../db');

module.exports = {
    create: () => db.query(`
        CREATE TYPE exam_type AS ENUM (
            'analise clinica', 'imagem'
        );
        CREATE TYPE exam_status AS ENUM (
            'ativo', 'inativo'
        );

        CREATE TABLE exam(
            id SERIAL PRIMARY KEY,
            name VARCHAR(512) NOT NULL,
            type exam_type NOT NULL,
            status exam_status DEFAULT 'ativo',
        );

        CREATE INDEX ON exam(type);
    `),
}