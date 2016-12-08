
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Green', function(table) {
    table.increments();
    table.string('name');
    table.string('desc');
    table.float('altitude');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Green');
};
