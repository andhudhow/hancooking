import * as RecipeApiUtil from '../util/recipe_api_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';

const receiveAllRecipes = recipes => {
  return {
    type: RECEIVE_RECIPES,
    recipes
  };
};

const receiveRecipe = recipe => {
  return {
    type: RECEIVE_RECIPE,
    recipe
  };
};

const receiveRecipeErrors = errors => {
  return {
    type: RECEIVE_RECIPE_ERRORS,
    errors
  };
};

export const fetchRecipes = () => dispatch => {
  return RecipeApiUtil.fetchRecipes().then(recipes => {
    return dispatch(receiveAllRecipes(recipes));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const fetchRecipe = (id) => dispatch => {
  return RecipeApiUtil.fetchRecipe(id).then(recipe => {
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const removeErrors = () => dispatch => {
  return dispatch(receiveRecipeErrors([]));
};