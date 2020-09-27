const db = require('../db');

module.exports = {
    create: () => db.query(`
        CREATE TABLE exam_laboratory(
            exam_id int REFERENCES exam(id) ON UPDATE CASCADE ON DELETE CASCADE,
            laboratory_id int REFERENCES laboratory(id) ON UPDATE CASCADE,
            CONSTRAINT exam_laboratory_pkey PRIMARY KEY (exam_id, laboratory_id)
        );
    `),
}