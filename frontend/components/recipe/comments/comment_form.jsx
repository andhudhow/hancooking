import React, { useState } from 'react';

export const CommentForm = props => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    const handleCommentCancel = e => {
        e.preventDefault(e);
        setCommentContent('');
        setCommentOpen(false);
    };
    
    const handleCommentSubmit = e => {
        e.preventDefault();
        props.saveComment({
            recipe_id: props.match.params.recipeId,
            body: commentContent
        })
    };
    
    return (
        <form onSubmit={handleCommentSubmit}>
            <div className="comment-body-container">
            <div className="user-name-container">
                <div className="comment-input-container">
                <textarea className={commentOpen 
                    ? 
                    "comment-textarea-editing"
                    :
                    "comment-textarea"
                }
                    onClick={() => setCommentOpen(!commentOpen)} 
                    onChange={e => setCommentContent(e.currentTarget.value)}
                    placeholder="Share your notes with other cooks or leave a private note."
                    value={commentContent} >
                </textarea>
                </div>
                <div className={commentOpen
                    ?
                    "comment-action-container"
                    :
                    "comment-action-container-hidden"
                }>
                <button className="cancel-comment-btn"
                    onClick={handleCommentCancel}>
                        Cancel
                </button>
                <button className={commentContent.length > 1
                    ?
                    "add-comment-btn"
                    :
                    "add-comment-btn-disabled"
                }>Add Note</button>
                </div>
            </div>
            </div>
        </form>
    )
};