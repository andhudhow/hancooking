import React from 'react';

export const CommentIndex = (props) => {
  return (
    <div className="comment-wrap">
    <div className="comment-header">
      <div className="comment-avatar">
        <div className="comment-author-nickname">
          <div className="comment-time">
            <div className="comment-body">
              {props.comments.map(comment => <li>{comment.body}</li>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )};

export default CommentIndex;