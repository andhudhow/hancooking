import React from 'react';

const IngredientListIndexItem = (props) => {
  return (
    <li key={props.key} className="ingredient">
      <span className="ingredient-quantity">{props.ingredient.quantity}</span>
      <span className="ingredient-desc">{props.ingredient.description}</span>
    </li>
  )
};

export default IngredientListIndexItem;