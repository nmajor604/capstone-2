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

exports.singleListing = (req, res) => {
  knex('listings')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send(`Record with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving warehouse ${req.params.id} ${err}`)
    );
};

exports.addListing = (req, res) => {
  if (!req.body.price || !req.body.item_name || !req.body.item_title || !req.body.item_description || !req.body.is_firm || !req.body.item_neighbourhood) {
    return res.status(400).send('Please fill in all fields.');
  }

  knex('listings')
    .insert(req.body)
    .then((data) => {
      const newListingURL = `/listings/${data[0]}`;
      res.status(201).location(newListingURL).send(newListingURL);
    })
    .catch((err) => res.status(400).send(`Error creating Listing: ${err}`));
};