const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');
const commentController = require('../../controllers/commentController');


// GET /api/articles
router.get('/',articlesController.articles_get);

// POST /api/articles
router.post('/',articlesController.articles_save);

// POST /api/articles/delete
router.post('/delete',articlesController.articles_delete);

// POST /api/articles/comment
router.post('/comment/:id',commentController.comment_post);

module.exports = router;