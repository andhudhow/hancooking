import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      saveHover: false
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  hoverOn() {
    this.setState({ saveHover: true });
  }
 
  hoverOff(){
    this.setState({ saveHover: false });
  }

  icon() {
    let icon;
    if(this.props.loggedIn && this.props.savedRecipeIds.includes(parseInt(this.props.id))) {
      return window.saveGreyURL
    } else if (this.props.loggedIn && this.state.saveHover) {
      return window.saveGreyURL
    } else {
      return window.saveRibbonGrayOutlineURL
    }
  }

  handleSave(e) {
    if(this.props.loggedIn && this.props.savedRecipeIds.includes(parseInt(this.props.id))) {
      return this.props.unsaveRecipe(this.props.id)
    } else if (this.props.loggedIn && this.state.saveHover) {
      return this.props.saveRecipe(this.props.id)
    } else {
      return this.props.saveRecipe(this.props.id)
    }
  }
  
  handleCardClick(e){
    if (this.props.loggedIn) {
      return null
    } else { 
      this.props.openModal('login')
    }
  }

  
  render() {
    const url = this.props.loggedIn ? `/recipes/${this.props.id}` : '/';
    
    return (
      <div>
      <Link to={url} onClick={this.handleCardClick}>
        <div className="recipe-card-container">
          <div><img src={this.props.photoUrl} className="recipe-card-image" /></div>
          <div className="card-base">
            <div className="card-title">{this.props.title}</div>
            <div className="card-byline">By {this.props.authorName}</div>
            <div className="card-cook-time">{this.props.cookTime}</div>
            <Link to={this.props.pathname}>
              <img className="saved-recipe-icon" 
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
                src={this.icon()}
                onClick={this.handleSave} />
            </Link>
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default RecipeCard