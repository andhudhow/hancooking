import RecipeHeader from './recipe_header';
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
          <RecipeHeader
            title={props.recipe.title}
            authorName={props.recipe.authorName}
            description={props.recipe.description}
            servings={props.recipe.servings}
            cookTime={cookTime(props.recipe.minDuration)}
          />
          <div className="recipe-instructions-container">
            <div className="recipe-ingredients-list-container">
              <h3 className='instructions-header'>Ingredients</h3>
              <br /><br />
              <IngredientListIndex ingredients={props.ingredients} />
              <button className="add-glist-btn" type="button">Add to Your Grocery List</button>
            </div>
            <div className="recipe-prepsteps-list">
            <h3 className='instructions-header'>Preparation</h3>
            <br /><br />
              <PrepStepsListIndex prepSteps={props.prepSteps} />
            </div>
          </div>
        </div>
         :
      <div>LOADING!</div>
  )
}
export default RecipeShow;