import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component{
  constructor(props) {
    super(props);
    debugger
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const loggedIn = getState().session.currentUser === 'undefined'
    return loggedIn ? null : this.props.openModal('login')
  }
  
  render() {
    return (
      <div>
      <Link to={`/recipes/${this.props.id}`} onClick={this.handleClick}>
        <div className="recipe-card-container">
          <div><img src={this.props.photoUrl}/></div>
          <div className="card-base">
            <div className="card-title">{this.props.title}</div>
            <div className="card-byline">By {this.props.authorName}</div>
            <div className="card-cook-time">{this.props.cookTime}</div>
            <Link to="/recipe-box"><img className="saved-recipe-icon" src={window.saveGreyURL} onClick={() => props.unsaveRecipe(this.props.id)} /></Link>
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default RecipeCard