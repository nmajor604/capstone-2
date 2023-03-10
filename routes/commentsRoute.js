const router = require('express').Router();
const commentsController = require('../controllers/commentsController');

router
    .route('/')
    .get(commentsController.index)
    .post(commentsController.addComment);

router
    .route('/:id')
    .get(commentsController.singleComment)
    .delete(commentsController.deleteComment);

module.exports = router;