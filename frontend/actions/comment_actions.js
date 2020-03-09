

// const receiveComment = comment => {
//   return {
//     type: RECEIVE_COMMENT,
//     comment
//   };
// };

// const removeComment = recipes => {
//   return {
//     type: REMOVE_COMMENT,
//     recipe
//   };
// };

// export const saveComment = comment => dispatch => (
//   CommentAPIUtil.saveComment(comment).then(
//     (recipe => dispatch(receiveComment(recipe)))
//   )
// );

// export const unsaveComment = (recipeId) => (dispatch) => (
//   CommentAPIUtil.unsaveComment(recipeId).then(
//     (recipe => dispatch(removeCommentSave(recipe)))
//   )
// );