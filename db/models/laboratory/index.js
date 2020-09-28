module.exports = {
  create: db => require('./create'),
  drop: db => require('./drop'),
  //the functions below returns a promise of the query
}
