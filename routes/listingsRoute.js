const router = require('express').Router();
const listingsController = require('../controllers/listingsController');

router
    .route('/')
    .get(listingsController.index)
    .post(listingsController.addListing);

router
    .route('/:id')
    .get(listingsController.singleListing)
    .patch(listingsController.updateListing)
    .delete(listingsController.deleteListing);

module.exports = router;