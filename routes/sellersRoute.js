const router = require('express').Router();
const sellersController = require('../controllers/sellersController');

router
    .route('/')
    .get(sellersController.index)
    .post(sellersController.addSeller);

router
    .route('/:id')
    .get(sellersController.singleSeller)
    // .delete(sellersController.deleteSeller);

module.exports = router;