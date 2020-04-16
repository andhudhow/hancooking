import React from 'react';

import { scrollTop } from '../../util/scroll_util';
import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredients/ingredient_list_index';
import PrepStepsListIndex from './prep_steps/prep_steps_list_index';
import CommentIndexContainer from './comments/comment_index_container';
import RatingContainer from './ratings/rating_container';
import CommentFormContainer from './comments/comment_form_container';
import { NutritionalData } from './nutritional_data/nutritional_data';

class RecipeShow extends React.Component{
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
  }

  componentDidMount() { 
    this.props.fetchRecipe(parseInt(this.props.match.params.recipeId));
    { scrollTop() };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.recipe && (parseInt(this.props.match.params.recipeId) !== prevProps.recipe.id)) {
      this.props.fetchRecipe(parseInt(this.props.match.params.recipeId));
      { scrollTop() };
    }
  }
  
  render() {
    const fetchedRecipeId = this.props.ingredients[0] 
      ? 
      this.props.ingredients[0].recipeId
      :
      null
    
    return (
        this.props.recipe 
          && this.props.match.params
          && fetchedRecipeId
          && (fetchedRecipeId === parseInt(this.props.match.params.recipeId))
          ?
          <div className="recipe-show-container">
            <RecipeHeaderContainer />
            <RatingContainer />
            <div className="recipe-instructions-container">
              <div className="recipe-ingredients-list-container">
                <h3 className='instructions-header'>Ingredients</h3>
                <br /><br />
                <IngredientListIndex ingredients={this.props.ingredients} />
                {/* <button className="add-glist-btn" type="button">
                  Add to Your Grocery List
                </button> */}
                <NutritionalData
                  recipe={this.props.recipe}
                  ingredients={this.props.ingredients} />
              </div>
              <div className="recipe-prepsteps-list">
                <h3 className='instructions-header'>Preparation</h3>
                <br /><br />
                  <PrepStepsListIndex prepSteps={this.props.prepSteps} />
                  <div className="comments-container">
                    {/* TODO - ADD LOGIC FOR COOKED / UNCOOKED */}
                    <h3 className='instructions-header'>Cooking Notes</h3>
                    <CommentFormContainer />
                        <CommentIndexContainer />
                  </div>
              </div>
            </div>
          </div>
          :
          <div className="loading-show">
            Loading...
          </div>
    )
  }
}
export default RecipeShow;