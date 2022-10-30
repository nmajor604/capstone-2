const router = require('express').Router();
const listingsController = require('../controllers/listingsController');

router.route('/').get(listingsController.index);

module.exports = router;