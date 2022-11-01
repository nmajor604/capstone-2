const router = require('express').Router();
const listingsController = require('../controllers/listingsController');

router.route('/').get(listingsController.index);

router.route('/:id').get(listingsController.singleListing);

module.exports = router;