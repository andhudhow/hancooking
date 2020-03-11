import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './actions/session_actions';
import { fetchRecipe, fetchRecipes, saveRecipe, unsaveRecipe } from './actions/recipe_actions';
import { fetchNutritionData } from './util/nutr_info_api_util';
import { createRating, updateRating, deleteRating } from './util/rating_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchRecipe= fetchRecipe;
  window.fetchRecipes = fetchRecipes;
  window.saveRecipe = saveRecipe;
  window.unsaveRecipe = unsaveRecipe;
  window.fetchNutritionData = fetchNutritionData;
  window.createRating = createRating;
  window.updateRating = updateRating;
  window.deleteRating = deleteRating;

  let store;
  if (window.currentUser) 
    {
    const preloadedState = { 
      entities: { savedRecipes: window.currentUser.savedRecipes },
      session: { 
        currentUser: {
          id: window.currentUser.id,
          email: window.currentUser.email,
          savedRecipeIds: window.currentUser.savedRecipeIds,
          ratedRecipeIds: window.currentUser.ratedRecipeIds
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});