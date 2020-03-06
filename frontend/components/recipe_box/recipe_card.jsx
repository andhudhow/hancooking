import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => (
  <div>
  <Link to={`/recipes/${props.id}`}>
    <div className="recipe-card-container">
      <div><img src='assets/jajangmyeon.jpg' /></div>
      <div className="card-base">
        <div className="card-title">{props.title}</div>
        <div className="card-byline">By {props.authorName}</div>
        <div className="card-cook-time">{props.cookTime}</div>
        <img className="saved-recipe-icon" src="/assets/save-grey.svg" onClick={() => props.unsaveRecipe(props.id)} />
      </div>
    </div>
  </Link>
  </div>
)

export default RecipeCard