export const selectCarouselRecipes = recipes => (
  Object.keys(recipes).map(key => recipes[key]).slice(10)
);