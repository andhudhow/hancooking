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
      props.recipe.id ?
        <div className="recipe-show-container">
          <div className="recipe-title-container">
            <div className="recipe-title">{props.recipe.title}</div>
            <div className="recipe-title author">{props.recipe.authorName}</div>
          </div>
          <div className="recipe-sub-title-container">
            <div className="yeild-time-container">
              <div className="recipe-yield-time"><span className="time-yield-label">Yield</span> {props.recipe.servings} servings</div>
              <div className="recipe-yield-time"><span className="time-yield-label">Time</span> {cookTime(props.recipe.minDuration)}</div>
            </div>
            <div className="recipe-sub-title-btn-container">
              <div className="save-recipe-btn">
                <img className="save-recipe-icon" src="assets/save-white-outline.svg"></img>
                  <div id="save-btn-text">Save to Recipe Box</div>
              </div>
            </div>
          </div>
          <div className="recipe-description-container">
            <p className="recipe-description">{props.recipe.description}</p>
            <img className="recipe-image" src="assets/bibimbap.jpg" />
          </div>
          <div className="recipe-instructions-container">
            <div className="recipe-ingredients-list-container">
              <h3>Ingredients</h3>
              <IngredientListIndex ingredients={props.ingredients} />
            </div>
            <div className="recipe-prepsteps-list">
            <h3>Preparation</h3>
              <PrepStepsListIndex prepSteps={props.prepSteps} />
            </div>
          </div>
        </div>
         :
      <div>LOADING!</div>
  )
}
export default RecipeShow;