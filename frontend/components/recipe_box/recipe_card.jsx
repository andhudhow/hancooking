import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => (
  <div>
  <Link to={`/recipes/${props.id}`}>
    <div className="recipe-card-container">
      <div><img src={props.photoUrl}/></div>
      <div className="card-base">
        <div className="card-title">{props.title}</div>
        <div className="card-byline">By {props.authorName}</div>
        <div className="card-cook-time">{props.cookTime}</div>
        <Link to="/recipe-box"><img className="saved-recipe-icon" src={window.saveGreyURL} onClick={() => props.unsaveRecipe(props.id)} /></Link>
      </div>
    </div>
  </Link>
  </div>
)

export default RecipeCard