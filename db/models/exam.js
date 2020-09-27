module.exports = {
  create: db => db 
  // create enum for exam types
  .query(`
  CREATE TYPE exam_type AS ENUM (
    'analise clinica', 'imagem'
    );
  `)
  .then(res => db
    // create enum for status type
    .query(
      `CREATE TYPE exam_status AS ENUM (
        'ativo', 'inativo'
      );
    `)
    .then(res => db
      // create table exam with the enums above as data type
      .query(`
        CREATE TABLE exam(
          id SERIAL PRIMARY KEY,
          name VARCHAR(512) NOT NULL,
          type exam_type NOT NULL,
          status exam_status DEFAULT 'ativo'
        );
      `)
      .then(res=> db
        // create indexation for better search performance
        .query(`
          CREATE INDEX ON exam(type);
        `)
        .then(res => console.log('Successfuly created model exam!'))
        .catch(err => console.error('ERROR ON create INDEX exam(type)\n\n'+err.stack))
      )
      .catch(err => console.error('ERROR ON create TABLE exam\n\n'+err.stack))
    )
    .catch(err => console.error('ERROR ON create TYPE exam_status\n\n'+err.stack))
  )
  .catch(err => console.error('ERROR ON create TYPE exam_type\n\n'+err.stack)),
  
  drop: db => db
  .query('DROP TABLE exam;')
  .then(res => db
    .query('DROP TYPE exam_status;')
    .then(res => db
      .query('DROP TYPE exam_type;')
      .catch(err => console.error('ERROR ON drop TYPE exam_type\n\n'+err.stack))
    )
    .catch(err => console.error('ERROR ON drop TYPE exam_status\n\n'+err.stack))
  )
  .catch(err => console.error('ERROR ON drop TABLE exam\n\n'+err.stack)),
  
}