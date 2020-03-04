export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/recipes'
  })
);

export const fetchRecipe = id => (
  $.ajax({
    method: 'GET',
    url: `api/recipes/${id}`
  })
);