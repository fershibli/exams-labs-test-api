module.exports = {
  create: require('./create'),
  drop: require('./drop'),
  //the functions below returns a promise of the query
  insert: require('./insert'),
  select: require('./select'),
}
