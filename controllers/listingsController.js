const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('listings')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Warehouses: ${err}`)
    );
};