const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
	{
		nyt_id: { type: String, required: true },
		headline: { type: String, required: true},
		snippet: { type: String, required: false},
		web_url: { type: String, required: true},
		pub_date: { type: Date, required: true},
		comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
	}
);

articleSchema
.virtual('pub_date_formatted')
.get(function(){
	return moment(this.post_date).format('MM-dd-YYYY');
});

module.exports = mongoose.model('Article', articleSchema);