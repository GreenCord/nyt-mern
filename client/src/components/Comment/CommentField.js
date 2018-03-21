import React from 'react';

const CommentField = props => (
  <input 
    onChange={props.handleInputChange}
    value={props.comment}
    name="comment"
    type="text"
    className="form-control"
    placeholder="Type a comment" 
    id="comment"
  />
);

export default CommentField;

