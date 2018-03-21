const article = require('../models/article');
const comment = require('../models/comment');
var async = require('async');

// GET all articles
exports.articles_get = (req,res)=>{
	article.find({})
	.populate('comment')
	.then(dbArticle=>res.json(dbArticle))
	.catch(err=>res.json(err));
};

// POST save article
exports.articles_save = (req,res)=>{
	console.log('Saving article',req.body);
	article.update(
		{ nyt_id: req.body.nyt_id },
		req.body,
		{ upsert: true}
	)
	.then(dbArticle=>{
		console.log('Upserted dbArticle:',dbArticle);
		res.json(req.body);
	}
	)
	.catch(err=>res.json(err));
}

exports.articles_delete = (req,res)=>{
	console.log('Deleting article from DB',req.body);
	console.log('Remove this _id: ',req.body._id);
	article.findByIdAndRemove(req.body._id)
	.then(dbArticle=>{
		console.log('Deleted article: ',dbArticle)
		res.json(dbArticle);
	})
	.catch(err=>res.json(err));
}

