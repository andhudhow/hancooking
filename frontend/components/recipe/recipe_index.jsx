import React from 'react';
import { cookTime } from '../../util/cook_time_util';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipe_box/recipe_card';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
    this.props.fetchRecipes()
  }

  render() {
    const recipes = 
      Object.keys(this.props.recipes).map((key, keyx) =>
        <div>
          <RecipeCard
            id={key}
            title={this.props.recipes[key].title}
            authorName={this.props.recipes[key].authorName}
            cookTime={cookTime(this.props.recipes[key].minDuration)}
            unsaveRecipe={this.props.unsaveRecipe}
          />
        </div>
      )


    return (
      <div className='recipe-box-container'>
          <h3>All Recipes</h3>{this.props.currentUserEmail}<br /><br />
          <section className="saved-recipe-index-container">
            {recipes}
          </section>
      </div>
    )
  }
}

export default RecipeIndex;