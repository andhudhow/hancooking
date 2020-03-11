export const createRating = (rating) => (
  $.ajax({
    method: 'POST',
    url: `api/recipes/${rating.recipeId}/ratings`,
    data: { rating }
  })
);

export const updateRating = (rating) => (
  $.ajax({
    method: 'PATCH',
    url: `api/ratings/${rating.id}`,
    data: { rating }
  })
);

export const deleteRating = (ratingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/ratings/${ratingId}`,
  })
);