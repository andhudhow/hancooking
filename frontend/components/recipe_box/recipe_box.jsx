import React from 'react';
import { cookTime } from '../../util/cook_time_util';
import { Link } from 'react-router-dom';

class RecipeBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const recipes = 
      this.props.savedRecipeIds.map((id, idx) =>
        <Link to={`/recipes/${id}`}>
          <div className="recipe-card-container">
            <div><img src='assets/jajangmyeon.jpg' /></div>
            <div className="card-base">
              <div className="card-title">{this.props.savedRecipes[id].title}</div>
              <div className="card-byline">By {this.props.savedRecipes[id].authorName}</div>
              <div className="card-cook-time">{cookTime(this.props.savedRecipes[id].minDuration)}</div>
              <img className="saved-recipe-icon" src="/assets/save-grey.svg"></img>
            </div>
          </div>
        </Link>
      )


    return (
      <div className='recipe-box-container'>
          <h3>Saved Recipes</h3>{this.props.currentUserEmail}<br /><br />
          <div className="saved-recipe-count">{this.props.savedRecipeCount} recipes</div>
          <section className="saved-recipe-index-container">
            {recipes}
          </section>
      </div>
    )
  }
}

export default RecipeBox;