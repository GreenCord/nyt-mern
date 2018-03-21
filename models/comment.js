var moment = require('moment');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
	{
		username: { type: String },
		comment: { type: String, required: true },
		comment_date: { type: Date, default: Date.now }
	}
);

commentSchema
.virtual('date_formatted')
.get(function(){
	return moment(this.comment_date).format('MMMM Do, YYYY - h:mm:ss a');
});

// Export model
module.exports = mongoose.model('Comment',commentSchema);