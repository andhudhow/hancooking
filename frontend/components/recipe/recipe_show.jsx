import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';

import React, { useEffect } from 'react'

class RecipeShow extends React.Component {
  constructor(props) {
    super(props)
  }  

  componentDidMount() {
    // debugger
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
      this.props.fetchRecipe(this.props.match.params.recipeId)
    }
  }
  
  render() {
    debugger
    return (
        this.props.recipe.id ?
          <div className="recipe-show-container">
            <RecipeHeaderContainer />
            <div className="recipe-instructions-container">
              <div className="recipe-ingredients-list-container">
                <h3 className='instructions-header'>Ingredients</h3>
                <br /><br />
                <IngredientListIndex ingredients={this.props.ingredients} />
                <button className="add-glist-btn" type="button">Add to Your Grocery List</button>
              </div>
              <div className="recipe-prepsteps-list">
              <h3 className='instructions-header'>Preparation</h3>
              <br /><br />
                <PrepStepsListIndex prepSteps={this.props.prepSteps} />
              </div>
            </div>
          </div>
          :
        <div>LOADING!</div>
    )
  }
}
export default RecipeShow;