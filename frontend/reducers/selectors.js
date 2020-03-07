export const selectAllRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key])
);

export const selectEditorRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key]).slice(11)
);

export const selectPopularRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key]).slice(0,11)
);