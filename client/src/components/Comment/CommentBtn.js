import React from 'react';

const CommentBtn = props => (
	<a
		onClick={props.handleFormSubmit}
		className="btn btn-primary" role="button">
		Comment
	</a>
);

export default CommentBtn;