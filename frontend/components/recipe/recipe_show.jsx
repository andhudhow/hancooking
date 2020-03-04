import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';

import React, { useEffect } from 'react'
const RecipeShow = (props) => {
  useEffect(() => {
    props.fetchRecipe(props.match.params.recipeId)
  }, []);

  const cookTime = mins => {
    const hours = Math.floor(mins / 60)
    
    if (hours > 0 && mins % 60 === 0) {
      return hours + ' hours'
    } else if (hours > 0) {
      return hours + ' hours and ' + (mins % 60) + ' minutes'
    } else {
      return mins + ' minutes'
    }
  }
  
  return (
    <div className="recipe-show-container">
      <div className="recipe-title">{props.recipe.title}</div>
      <div className="recipe-byline">{props.recipe.authorName}</div>
      <div className="yield"><span className="time-yield-label">Yield:</span> {props.recipe.servings}</div>
      <div className="cook-time"><span className="yield">Time:</span> {cookTime(props.recipe.minDuration)}</div>
      <div className="servings">{props.recipe.description}</div>
      <div className="recipe-image-container">
        <img className="recipe-image" src="assets/bibimbap.jpg" />
      </div>
      <IngredientListIndex ingredients={props.ingredients} />
      <PrepStepsListIndex prepSteps={props.prepSteps} />
    </div>
  )
}
export default RecipeShow;