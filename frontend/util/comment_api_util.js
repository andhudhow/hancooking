export const saveComment = comment => {
  return (
  $.ajax({
    method: 'POST',
    url: `api/recipes/${comment.recipe_id}/comments`,
    data: { comment }
  }))
};

export const deleteComment = recipeId => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`,
  })
);