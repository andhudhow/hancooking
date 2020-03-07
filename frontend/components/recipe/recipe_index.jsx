import React from 'react';
import { cookTime } from '../../util/cook_time_util';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipe_box/recipe_card';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const recipes = 
      this.props.recipes.map((id, idx) =>
        <div>
          <RecipeCard
            id={id}
            title={this.props.savedRecipes[id].title}
            authorName={this.props.savedRecipes[id].authorName}
            cookTime={cookTime(this.props.savedRecipes[id].minDuration)}
            unsaveRecipe={this.props.unsaveRecipe}
          />
        </div>
      )


    return (
      <div className='recipe-box-container'>
          <h3>Saved Recipes</h3>{this.props.currentUserEmail}<br /><br />
          <div className="saved-recipe-count">All recipes</div>
          <section className="saved-recipe-index-container">
            {recipes}
          </section>
      </div>
    )
  }
}

export default RecipeIndex;