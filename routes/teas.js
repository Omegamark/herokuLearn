var knex = require('../db/knex');
function teas() {
  return knex('teas')
}
