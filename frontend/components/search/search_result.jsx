import React from 'react';
import { cookTime } from '../../util/cook_time_util';
import RecipeCardContainer from '../recipe_box/recipe_card_container';
import { scrollTop } from '../../util/scroll_util';

class SearchResult extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    scrollTop();
  }

  render() {
    const resultIndex = 
      this.props.recipes.map((recipe, idx) =>
        <div>
          <RecipeCardContainer
            id={recipe.id}
            photoUrl={recipe.photoUrl}
            title={recipe.title}
            authorName={recipe.authorName}
            cookTime={cookTime(recipe.minDuration)}
          />
        </div>
      )

    return (
      <div className='search-results-container'>
          <h3>Search results for "{`${this.props.match.params.searchQuery}`}"</h3>
          <div className="saved-recipe-count">{resultIndex.length} recipes</div>
          <section className="saved-recipe-index-container">
            {resultIndex}
          </section>
      </div>
    )
  }
}

export default SearchResult;