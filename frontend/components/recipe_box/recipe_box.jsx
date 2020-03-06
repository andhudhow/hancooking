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
          <div class="recipe-card">
            <div>{this.props.savedRecipes[id].title}</div>
            <div>{this.props.savedRecipes[id].authorName}</div>
            <div>{cookTime(this.props.savedRecipes[id].minDuration)}</div>
            <div><img src='assets/jajangmyeon.jpg' /></div>
          </div>
        </Link>
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