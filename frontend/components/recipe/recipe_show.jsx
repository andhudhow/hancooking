import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';
import Comment from './comment';
import { scrollTop } from '../../util/scroll_util';

import React, { useEffect } from 'react'

class RecipeShow extends React.Component{

  componentDidMount() {
    this.props.recipe ? null : this.props.fetchRecipes();
    this.props.fetchRecipe(this.props.match.params.recipeId);
    { scrollTop() };
  }
  
  render() {
    const fetchedRecipeId = this.props.recipe ? this.props.ingredients[0].recipeId : null
    
    return (
        this.props.match.params && (fetchedRecipeId === parseInt(this.props.match.params.recipeId)) ?
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
                  <div className="cooked-module">
                  <span className="cooked-label">Have you cooked this?</span>
                  <img className="cooked-icon" src={window.uncookedIconURL} />
                  <span className="cooked-text">Mark as <strong>Cooked</strong></span>
                  </div>
                  <div className="comments-container">
                    {/* TODO - ADD LOGIC FOR COOKED / UNCOOKED */}
                    <h3 className='instructions-header'>Cooking Notes</h3>
                    <form>
                      <div class="comment-body-container">
                        <div class="user-name-container">
                          <div class="comment-input-container">
                            <textarea class="comments-body"
                              placeholder="Share your notes with other cooks or leave a private note.">
                            </textarea>
                          </div>
                          <div class="comment-action-container">
                            <button class="cancelcomment-btn">Cancel</button>
                            <button class="add-comment-btn">Add Note</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="comment-index-container">
                      <div className="comment-index">
                        <Comment comments={this.props.comments} />
                      </div>
                      </div>
            </div>
            </div>
          </div>
          </div>
          :
        <div className="loading-show">LOADING!</div>
    )
  }
}
export default RecipeShow;