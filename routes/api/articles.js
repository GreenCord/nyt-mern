const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');


// GET /api/articles
router.route('/').get(function(){
	res.json({
		text: 'UNIMPLEMENTED GET: /api/articles - all articles'
	});
})

// POST /api/articles
router.route('/').post(function(){
	res.json({
		text: 'UNIMPLEMENTED POST: /api/articles - save an article'
	});
})

module.exports = router;