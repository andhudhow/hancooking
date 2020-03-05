import React from 'react';
import { cookTime } from '../../util/cook_time_util';


class RecipeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    if (this.props.btnText === 'Save To Recipe Box') {
      this.props.saveRecipe(this.props.recipe.id)
    } else {
      this.props.unsaveRecipe(this.props.recipe.id)
    }
  }

  render() {
    // { title, authorName, servings. minDuration, saveIcon, buttonText, handleSaveClick } = this.props;

    return (
      <section>
        <div className="recipe-title-container">
          <div className="recipe-title">{this.props.recipe.title}</div>
          <div className="recipe-title author">{this.props.recipe.authorName}</div>
        </div>
        <div className="recipe-sub-title-container">
          <div className="yeild-time-container">
            <div className="recipe-yield-time"><span className="time-yield-label">Yield</span> {this.props.recipe.servings} servings</div>
            <div className="recipe-yield-time"><span className="time-yield-label">Time</span> {cookTime(this.props.recipe.minDuration)}</div>
          </div>
          <div className="recipe-sub-title-btn-container">
            <div className="save-recipe-btn" onClick={this.handleClick}>
              <img className="save-recipe-icon" src={this.props.saveIcon}></img>
                <div className={ this.props.textClass }>{this.props.btnText}</div>
            </div>
            <div className="print-recipe-btn">
            <a href="javascript:window.print()"><img className="print-recipe-icon" src="assets/rdp-print.svg"></img></a>
            </div>
          </div>
        </div>
        <div className="recipe-description-container">
          <p className="recipe-description">{this.props.recipe.description}</p>
          <img className="recipe-image" src="assets/bibimbap.jpg" />
        </div>
      </section>
    )
  }
}

export default RecipeHeader;