
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Green').del()

    .then(function () {
      const tea = [{
      //id: knex.schema.increments(),
        name: 'Iron Goddess',
        desc: 'It tastes like honeysuckle',
        altitude: 1
      },
      {
      //id: knex.schema.increments(),
      name: 'Iron Goddess',
      desc: 'It tastes like honeysuckle',
      altitude: 2
    },
      {
      //id: knex.schema.increments(),
      name: 'Iron Goddess',
      desc: 'It tastes like honeysuckle',
      altitude: 3
      }
    ]
return knex('Green').insert(tea);
  });

};
