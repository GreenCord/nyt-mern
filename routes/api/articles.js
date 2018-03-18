const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');


// GET /api/articles
router.get('/',articlesController.articles_get);

// POST /api/articles
router.post('/',articlesController.articles_save);

module.exports = router;