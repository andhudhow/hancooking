import React from 'react';
import RecipeHeaderContainer from './recipe_header_container';
import IngredientListIndex from './ingredient_list_index';
import PrepStepsListIndex from './prep_steps_list_index';
import CommentIndexContainer from './comment_index_container';
import { scrollTop } from '../../util/scroll_util';
import { fetchNutritionData } from '../../util/nutr_info_api_util';

class RecipeShow extends React.Component{
  constructor(props) {
    
    super(props);
    this.state = {
      commentOpen: false,
      commentContent: '',
      nutritionalInfo: {},
      nutrHover: false,
      ratingHover: false,
      starHover: this.props.recipe ? this.props.recipe.avgRating : 0
    };
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentCancel = this.handleCommentCancel.bind(this);
    this.getNutritionData = this.getNutritionData.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.setState = this.setState.bind(this);
    this.handleRatingHover = this.handleRatingHover.bind(this);
    this.handleStarHover = this.handleStarHover.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchRecipe(this.props.match.params.recipeId)
      .then(this.getNutritionData());

    { scrollTop() };
  }

  componentDidUpdate(prevProps) {
    debugger
    if (prevProps.recipe === undefined || (parseInt(this.props.match.params.recipeId) !== prevProps.recipe.id)) {
      this.props.fetchRecipes().then(this.props.fetchRecipe(this.props.match.params.recipeId))
      .then(this.getNutritionData())
    { scrollTop() };
    }
  }
  

  getNutritionData() {
    if (this.props.recipe) { 
      const nutrData = {
        title: this.props.recipe.title,
        yield: this.props.recipe.servings + "servings",
        ingr: this.props.ingredients.reduce((acc, el) => acc.concat((el.quantity + " " + el.description)), [])
      };
      
      fetchNutritionData(nutrData).then(pay => this.setState( { nutritionalInfo: pay } ));
    } else {
      null
    };
  }
  
  handleCommentClick() {
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

  handleRatingSubmit(val){
    
    if (this.props.currentUser.ratedRecipeIds.includes(parseInt(this.props.match.params.recipeId))) { 
      this.props.updateRating({
        recipe_id: this.props.recipe.id,
        star_rating: val
      })
    } else {
      this.props.createRating({
        recipe_id: this.props.recipe.id,
        star_rating: val
      })
    }
  }

  handleTyping(e){
    this.setState({ commentContent: e.currentTarget.value })
  }

  handleRatingHover(e){
    this.setState( { ratingHover : true } )
  }

  handleStarHover(val){
    this.setState( { starHover: val })
  }
  
  render() {
    const fetchedRecipeId = this.props.ingredients[0] ? this.props.ingredients[0].recipeId : null

    let starRating
    if (this.props.recipe) {
      if (this.props.ratings[0] && this.props.currentUser.ratedRecipeIds.includes(parseInt(this.props.match.params.recipeId))) {
        let currentUserRatings = this.props.ratings.filter(rating => rating.userId === this.props.currentUser.id)
        let currentUserRating = currentUserRatings.length > 0 && currentUserRatings[0] ? currentUserRatings[0].starRating : null

        //fix this to be a short ternary based on the user rating
        starRating =
          <div className = "recipe-rating-avg-stars">
            <img src={currentUserRating >= 1 ? window.starYellowURL : window.starEmptyURL }></img>
            <img src={currentUserRating >= 2 ? window.starYellowURL : window.starEmptyURL }></img>
            <img src={currentUserRating >= 3 ? window.starYellowURL : window.starEmptyURL }></img>
            <img src={currentUserRating >= 4 ? window.starYellowURL : window.starEmptyURL }></img>
            <img src={currentUserRating >= 5 ? window.starYellowURL : window.starEmptyURL }></img>
          </div> 
      } else { 
        <div className = "recipe-rating-avg-stars">
          <img src={this.props.avgRating >= 1 ? window.starRedURL : window.starEmptyURL }></img>
          <img src={this.props.avgRating >= 2 ? window.starRedURL : window.starEmptyURL }></img>
          <img src={this.props.avgRating >= 3 ? window.starRedURL : window.starEmptyURL }></img>
          <img src={this.props.avgRating >= 4 ? window.starRedURL : window.starEmptyURL }></img>
          <img src={this.props.avgRating >= 5 ? window.starRedURL : window.starEmptyURL }></img>
        </div> 
      } 
    }
    
    return (
        this.props.recipe && this.props.match.params && fetchedRecipeId && (fetchedRecipeId === parseInt(this.props.match.params.recipeId)) ?
          <div className="recipe-show-container">
            <RecipeHeaderContainer />
            <div className="recipe-metadata-container">
            <div className={this.state.ratingHover ? "rating-tooltip-open" : "rating-tooltip-closed"}
              onMouseLeave={()=>this.setState( { ratingHover: false })}>
                <div className = "recipe-rating-avg-stars">
                  <img src={this.state.starHover >= 1 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>this.handleStarHover(1)} onClick={()=>this.handleRatingSubmit(1)} />
                  <img src={this.state.starHover >= 2 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>this.handleStarHover(2)} onClick={()=>this.handleRatingSubmit(2)} />
                  <img src={this.state.starHover >= 3 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>this.handleStarHover(3)} onClick={()=>this.handleRatingSubmit(3)} />
                  <img src={this.state.starHover >= 4 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>this.handleStarHover(4)} onClick={()=>this.handleRatingSubmit(4)} />
                  <img src={this.state.starHover >= 5 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>this.handleStarHover(5)} onClick={()=>this.handleRatingSubmit(5)} />
                </div>
            </div>
              <div class="rating-total">{this.props.recipe.numRatings} ratings</div>
              <div class="star-rating"
                onMouseEnter={()=>this.setState( { ratingHover: true })}>
                  {starRating}
              </div>
            </div>
            <div className="recipe-instructions-container">
              <div className="recipe-ingredients-list-container">
                <h3 className='instructions-header'>Ingredients</h3>
                <br /><br />
                <IngredientListIndex ingredients={this.props.ingredients} />
                <button className="add-glist-btn" type="button">
                  Add to Your Grocery List
                </button>
                {this.state.nutritionalInfo.calories ? 
                  <div className="nutr-container" onMouseLeave = {()=>this.setState( { nutrHover : false } )}>
                    <div className='nutr-header'>
                      <img className='nutr-icon' 
                        src={window.nutrInfoIconOutline}
                        onMouseEnter = {()=>this.setState( { nutrHover : true } )}
                        // onMouseLeave = {()=>this.setState( { nutrHover : false } )}
                        />
                      <span className="nutr-header-text" 
                        onMouseEnter = {()=>this.setState( { nutrHover : true } )}
                        // onMouseLeave = {()=>this.setState( { nutrHover : false } )}
                      > Nutritional Information</span>
                    </div>
                      {this.state.nutritionalInfo.totalNutrients ? 
                        <div className={this.state.nutrHover ? "nutr-list" : "nutr-hidden"} >
                          <div className="nutr-index-header">Based on {this.props.recipe.servings} servings:</div>
                          {this.state.nutritionalInfo.calories ?
                            <li>Calories: {Math.floor(this.state.nutritionalInfo.calories)}</li> : null}
                          {this.state.nutritionalInfo.totalNutrients.CHOCDF ?
                            <li>Carbs: {Math.floor(this.state.nutritionalInfo.totalNutrients.CHOCDF.quantity)} grams </li> : null }
                          {this.state.nutritionalInfo.totalNutrients.FAT ?
                            <li>Fat: {Math.floor(this.state.nutritionalInfo.totalNutrients.FAT.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.FATRN ?
                            <li>Trans Fat: {Math.floor(this.state.nutritionalInfo.totalNutrients.FATRN.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.FAMS ?
                            <li>Monosaturated Fat: {Math.floor(this.state.nutritionalInfo.totalNutrients.FAMS.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.FAPU ?
                            <li>Polyunsaturated Fat: {Math.floor(this.state.nutritionalInfo.totalNutrients.FAPU.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.FIBTG ?
                            <li>Fiber: {Math.floor(this.state.nutritionalInfo.totalNutrients.FIBTG.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.SUGAR ?
                            <li>Sugar: {Math.floor(this.state.nutritionalInfo.totalNutrients.SUGAR.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.PROCNT ?
                            <li>Protein: {Math.floor(this.state.nutritionalInfo.totalNutrients.PROCNT.quantity)} grams</li> : null }
                          {this.state.nutritionalInfo.totalNutrients.NA ?
                            <li>Sodium: {Math.floor(this.state.nutritionalInfo.totalNutrients.NA.quantity)} grams</li> : null }
                          <p className="nutrition-note">Note: The information shown is Edamam’s estimate based on available ingredients and preparation. It should not be considered a substitute for a professional nutritionist’s advice.</p>
                          <p className="nutrition-attribution">Powered by <img id="edamam-logo" src="https://static01.nyt.com/applications/cooking/982798d/assets/edamam-logo.png"></img></p>
                        </div>
                      : null }
                  </div>
                  : null }
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
                              onClick={this.handleCommentClick} 
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
        <div className="loading-show">
          Loading...
        </div>
    )
  }
}
export default RecipeShow;