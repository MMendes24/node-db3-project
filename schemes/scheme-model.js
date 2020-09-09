const db = require('../data/dbConfig.js');
const { where } = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id) {
    return db('steps')
    .where({ scheme_id: id })
}

function add(schemeData) {
    return db('schemes')
    .insert(schemeData)
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('schemes')
      .where('id', id)
      .del();
  }