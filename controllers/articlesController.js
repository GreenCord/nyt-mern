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
	res.json(req.body);
}

