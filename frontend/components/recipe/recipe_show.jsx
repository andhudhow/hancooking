import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';
import CommentIndexContainer from './comment_index_container';
import { scrollTop } from '../../util/scroll_util';
import { fetchNutritionData } from '../../util/nutr_info_api_util';

import React, { useEffect } from 'react'

class RecipeShow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      commentOpen: false,
      commentContent: '',
      nutritionalInfo: {}
    };
    this.handleCommentOpen = this.handleCommentOpen.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentCancel = this.handleCommentCancel.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }
  componentDidMount() {
    this.props.recipe ? null : this.props.fetchRecipes();
    this.props.fetchRecipe(this.props.match.params.recipeId);
    { scrollTop() };
    // fetchNutritionData().then(payload => this.setState( {nutritionalInfo : payload }));
  }

  handleCommentOpen() {
    // e.preventDefault();
    this.setState({ commentOpen: !this.state.commentOpen })
  }

  handleCommentSubmit(e){
    e.preventDefault();
    this.props.saveComment({
      recipe_id: this.props.match.params.recipeId,
      body: this.state.commentContent
    });
    this.setState( { 
      commentOpen: false,
      commentContent: '' }
    );
  }

  handleCommentCancel(e){
    e.preventDefault();
    this.setState({ commentContent: '' })
    this.setState({ commentOpen : false })
  }

  handleTyping(e){
    this.setState({ commentContent: e.currentTarget.value })
  }
  
  render() {
    const fetchedRecipeId = this.props.ingredients[0] ? this.props.ingredients[0].recipeId : null
    
    return (
        this.props.recipe && this.props.match.params && fetchedRecipeId && (fetchedRecipeId === parseInt(this.props.match.params.recipeId)) ?
          <div className="recipe-show-container">
            <RecipeHeaderContainer />
            <div className="recipe-instructions-container">
              <div className="recipe-ingredients-list-container">
                <h3 className='instructions-header'>Ingredients</h3>
                <br /><br />
                <IngredientListIndex ingredients={this.props.ingredients} />
                <button className="add-glist-btn" type="button">
                  Add to Your Grocery List
                </button>
                <div className="nutr-container">
                  <img className='nutr-icon' src={window.nutrInfoIconOutline} />
                  Nutritional Information
                </div>
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
                    <form onSubmit={this.handleCommentSubmit}>
                      <div className="comment-body-container">
                        <div className="user-name-container">
                          <div className="comment-input-container">
                            <textarea className={this.state.commentOpen ? "comment-textarea-editing" : "comment-textarea"}
                              onClick={this.handleCommentOpen} 
                              onChange={this.handleTyping}
                              placeholder="Share your notes with other cooks or leave a private note."
                              value={this.state.commentContent} >
                            </textarea>
                          </div>
                          <div className={this.state.commentOpen ? "comment-action-container" : "comment-action-container-hidden"}>
                            <button className="cancel-comment-btn" onClick={this.handleCommentCancel}>Cancel</button>
                            <button className={this.state.commentContent.length > 1 ? "add-comment-btn" : "add-comment-btn-disabled" }>Add Note</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="comment-index-container">
                      <div className="comment-index">
                        <CommentIndexContainer />
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