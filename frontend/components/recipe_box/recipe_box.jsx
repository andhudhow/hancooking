import React from 'react';

class RecipeBox extends React.Component {
  constructor(props) {
    super(props)
  }

  recipes() {
    debugger
    return (
      <div>
      {this.props.savedRecipeIds.map(id => (
        this.props.savedRecipes[id].title
      ))}
      </div>
    )
  }
  render() {
      return (
      <div className='recipe-box-container'>
          <h3>Saved Recipes</h3>
          <div className="saved-recipe-count">{this.props.savedRecipeCount} recipes</div>
          <section className="saved-recipe-index">
            {this.recipes()}
          </section>
      </div>
    )
  }
}

export default RecipeBox;