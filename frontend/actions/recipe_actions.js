import * as RecipeAPIUtil from '../util/recipe_api_util';
import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const RECEIVE_RECIPE_SAVE = 'RECEIVE_RECIPE_SAVE';
export const REMOVE_RECIPE_SAVE = 'REMOVE_RECIPE_SAVE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllRecipes = recipes => {
  
  return {
    type: RECEIVE_RECIPES,
    recipes
  };
};

const receiveRecipe = recipe=> {
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

const receiveRecipeSave = currentUser => {
  return {
    type: REMOVE_RECIPE_SAVE,
    currentUser
  };
};


const removeRecipeSave = currentUser => {
  return {
    type: RECEIVE_RECIPE_SAVE,
    currentUser
  };
};

const receiveComment = recipe => {
  return {
    type: RECEIVE_COMMENT,
    recipe
  };
};

const removeComment = recipe => {
  return {
    type: REMOVE_COMMENT,
    recipe
  };
};

export const fetchRecipes = () => dispatch => {
  
  return RecipeAPIUtil.fetchRecipes().then(recipes => {
    return dispatch(receiveAllRecipes(recipes));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const fetchRecipe = (id) => dispatch => {
  return RecipeAPIUtil.fetchRecipe(id).then(recipe=> {
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  });
};

export const removeErrors = () => dispatch => {
  return dispatch(receiveRecipeErrors([]));
};


export const saveRecipe = (recipeId) => (dispatch) => (
  RecipeAPIUtil.saveRecipe(recipeId).then(
    ((currentUser) => dispatch(receiveRecipeSave(currentUser)))
  )
);

export const unsaveRecipe = (recipeId) => (dispatch) => (
  RecipeAPIUtil.unsaveRecipe(recipeId).then(
    ((response) => dispatch(removeRecipeSave(response)))
  )
);

export const saveComment = comment => dispatch => (
  CommentAPIUtil.saveComment(comment).then(
    (recipe => dispatch(receiveComment(recipe)))
  )
);

export const deleteComment = (recipeId) => (dispatch) => (
  CommentAPIUtil.deleteComment(recipeId).then(
    (recipe => dispatch(removeCommentSave(recipe)))
  )
);