export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/recipes'
  })
);

export const fetchRecipe= id => (
  $.ajax({
    method: 'GET',
    url: `api/recipes/${id}`
  })
);

export const saveRecipe= (recipeId) => (
  $.ajax({
    method: 'POST',
    url: `api/recipes/${recipeId}/save`,
  })
);

export const unsaveRecipe= (recipeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/recipes/${recipeId}/unsave`,
  })
);