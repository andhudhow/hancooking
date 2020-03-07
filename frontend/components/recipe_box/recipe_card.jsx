import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    debugger
    if (this.props.loggedIn) {
      return null
    } else { 
      this.props.openModal('login')
    }
  }
  
  render() {
    debugger
    const url = this.props.loggedIn ? `/recipes/${this.props.id}` : '/';

    return (
      <div>
      <Link to={url} onClick={this.handleClick}>
        <div className="recipe-card-container">
          <div><img src={this.props.photoUrl}/></div>
          <div className="card-base">
            <div className="card-title">{this.props.title}</div>
            <div className="card-byline">By {this.props.authorName}</div>
            <div className="card-cook-time">{this.props.cookTime}</div>
            <Link to="/recipe-box"><img className="saved-recipe-icon" src={window.saveGreyURL} onClick={() => this.props.unsaveRecipe(this.props.id)} /></Link>
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default RecipeCard