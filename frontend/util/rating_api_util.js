export const createRating = (rating) => {
  return (
  $.ajax({
    method: 'POST',
    url: `api/recipes/${rating.recipe_id}/ratings`,
    data: { rating }
  }))
};

export const updateRating = (rating) => {
  debugger
  return (
  $.ajax({
    method: 'PATCH',
    url: `api/ratings/${rating.id}`,
    data: { rating }
  }))}
;

export const deleteRating = (ratingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/ratings/${ratingId}`,
  })
);