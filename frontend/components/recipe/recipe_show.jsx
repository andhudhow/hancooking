import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';
import { scrollTop } from '../../util/scroll_util';

import React, { useEffect } from 'react'

class RecipeShow extends React.Component{

  componentDidMount() {
    debugger
    this.props.recipe ? null : this.props.fetchRecipes();
    this.props.fetchRecipe(this.props.match.params.recipeId);
    { scrollTop() };
  }
  
  render() {
    const fetchedRecipeId = this.props.recipe ? this.props.ingredients[0].recipeId : null
    
    return (
        fetchedRecipeId === parseInt(this.props.match.params.recipeId) ?
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
              {/* <div className="comments-contianer">
                {this.props.comments.map(comment => 
                  <li>{comment.body}</li>)}
              </div> */}
          </div>
          :
        <div className="loading-show">LOADING!</div>
    )
  }
}
export default RecipeShow;