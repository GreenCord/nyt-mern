const article = require('../models/article');
const comment = require('../models/comment');
var async = require('async');


// POST save article
exports.comment_post = (req,res)=>{
	console.log('Create comment: ',req.body);
	console.log('For Article _id: ', req.params.id);
	
	comment.create(req.body)
	.then(dbComment => {
		console.log('dbComment',dbComment);
		console.log('req.params.id', req.params.id);
		return article.findOneAndUpdate({_id: req.params.id},{$push: {comment: dbComment._id} },{new: true});
	})
	.then(dbArticle => {
		console.log('Commented: ',dbArticle);
		res.json(dbArticle);
	})
	.catch(err=>res.json(err));
};
