export const selectAllRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key])
);

export const selectEditorRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key]).slice(11)
);

export const selectPopularRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key]).slice(0,11)
);

export const selectFeaturedRecipe = recipes => {
  const recipesArr = Object.keys(recipes).map(key => recipes[key]);

  if(recipesArr.length) {
    return recipesArr.filter(recipe => recipe.title === "Korean-Style Short Ribs")[0].id
  } else {
    return null
  }
};