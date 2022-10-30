const listingsData = require('../seed_data/listings');

exports.seed = function (knex) {
  return knex('listings')
    .del()
    .then(function () {
      return knex('listings').insert(listingsData);
    });
    
};