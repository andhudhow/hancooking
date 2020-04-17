import React from 'react';

import IngredientListIndexItem from './ingredient_list_index_item';

const IngredientListIndex = (props) => {
  return (
    <div className="ingredients-wrap">
      <ul className="ingredient-list">
      {props.ingredients.map((ingredient, index) => (
        <IngredientListIndexItem ingredient={ingredient} key={ingredient-index} />
      ))}
      </ul>
    </div>
  )
}

export default IngredientListIndex;