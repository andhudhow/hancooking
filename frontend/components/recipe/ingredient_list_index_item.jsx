import React from 'react';

const IngredientListIndexItem = (props) => {
  return (
    <li key={props.key} className="ingredient">
      <span class="ingredient-quantity">{props.ingredient.quantity}</span>
      <span class="ingredient-desc">{props.ingredient.description}</span>
    </li>
  )
};

export default IngredientListIndexItem;