import React from 'react';

import { cookTime } from '../../util/cook_time_util';
import { scrollTop } from '../../util/scroll_util';
import RecipeCardContainer from '../recipe_box/recipe_card_container';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipes();
    { scrollTop() };
  }

  render() {
    const recipes = 
      Object.keys(this.props.recipes).map((key, idx) =>
        <div>
          <RecipeCardContainer
            id={key}
            photoUrl={this.props.recipes[key].photoUrl}
            title={this.props.recipes[key].title}
            authorName={this.props.recipes[key].authorName}
            cookTime={cookTime(this.props.recipes[key].minDuration)}
            unsaveRecipe={this.props.unsaveRecipe}
          />
        </div>
      )


    return (
      <div className='search-results-container'>
          <h3>All Recipes</h3>{this.props.currentUserEmail}<br /><br />
          <section className="saved-recipe-index-container">
            {recipes}
          </section>
      </div>
    )
  }
}

export default RecipeIndex;