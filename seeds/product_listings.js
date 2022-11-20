const listingsData = require('../seed_data/listings');
const sellersData = require('../seed_data/sellers');

exports.seed = function (knex) {
  return knex('sellers')
    .del()
    .then(function () {
      return knex('sellers').insert(sellersData);
    })
    .then(() => {
      return knex('listings').del();
    })
    .then(() => {
      return knex('listings').insert(listingsData);
    });
    
};