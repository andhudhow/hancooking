import React from 'react';
import { cookTime } from '../../util/cook_time_util';

class RecipeBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const recipes = 
      this.props.savedRecipeIds.map((id, idx) =>
        <div class="recipeCard">
          <ul>
            <li key={idx}>{this.props.savedRecipes[id].title}</li>
            <li key={idx}>{this.props.savedRecipes[id].authorName}</li>
            <li key={idx}>{cookTime(this.props.savedRecipes[id].minDuration)}</li>
            <li key={idx}><img src='assets/jajangmyeon.jpg' /></li>
          </ul>
        </div>
      )

    return (
      <div className='recipe-box-container'>
          <h3>Saved Recipes</h3>
          <div className="saved-recipe-count">{this.props.savedRecipeCount} recipes</div>
          <section className="saved-recipe-index">
            {recipes}
          </section>
      </div>
    )
  }
}

export default RecipeBox;