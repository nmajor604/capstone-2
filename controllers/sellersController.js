const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('sellers')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving sellers: ${err}`)
    );
};

exports.singleSeller = (req, res) => {
  knex('sellers')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send(`Seller with id: ${req.params.id} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving seller ${req.params.id} ${err}`)
    );
};

exports.addSeller = (req, res) => {
  if (!req.body.seller || !req.body.pwd ) {
    return res.status(400).send('Please fill in all fields.');
  }

  knex('sellers')
    .insert(req.body)
    .then((data) => {
      const newSellerURL = `/sellers/${data[0]}`;
      res.status(201).location(newSellerURL).send(newSellerURL);
    })
    .catch((err) => res.status(400).send(`Error creating seller: ${err}`));
};

// exports.deleteSeller = (req, res) => {
//   knex('sellers')
//     .delete()
//     .where({ id: req.params.id })
//     .then(() => {
//       res.status(204).send(`Seller with id: ${req.params.id} has been deleted`);
//     })
//     .catch((err) => 
//     res.status(400).send(`Error deleting seller ${req.params.id} ${err}`)
//     );
// };