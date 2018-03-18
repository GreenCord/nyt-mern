const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
	{
		nyt_id: { type: String, required: true },
		headline: { type: String, required: true},
		snippet: { type: String, required: false},
		web_url: { type: String, required: true},
		comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
	}
);

module.exports = mongoose.model('Article', articleSchema);