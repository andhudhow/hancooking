import React from 'react';
import timeSince from '../../../util/time_ago_util';

export const CommentIndex = (props) => {
  
  return (
    props.comments.map(comment => 
      <div className="comment-wrap">
        <img className="comment-avatar" src={comment.avatarUrl} />
        <div className="comment-contents">
          <div className="comment-header">
          <div className="comment-author-nickname">
              {comment.nickname}
          </div>
          <div className="comment-time">
              {timeSince(new Date(comment.createdAt))} ago
          </div>
        <div className="comment-body">
            {comment.body}
        </div>
        {comment.userId === props.currentUser.id ?
          <button className="delete-comment-btn" onClick={()=>props.deleteComment(comment.id)}>Delete Note</button> : null}
      </div>
      </div>
      </div>
    ))};

export default CommentIndex;