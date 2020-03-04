import React from 'react';

const RecipeHeader = (props) => (
  <section>
    <div className="recipe-title-container">
      <div className="recipe-title">{props.title}</div>
      <div className="recipe-title author">{props.authorName}</div>
    </div>
    <div className="recipe-sub-title-container">
      <div className="yeild-time-container">
        <div className="recipe-yield-time"><span className="time-yield-label">Yield</span> {props.servings} servings</div>
        <div className="recipe-yield-time"><span className="time-yield-label">Time</span> {props.cookTime}</div>
      </div>
      <div className="recipe-sub-title-btn-container">
        <div className="save-recipe-btn">
          <img className="save-recipe-icon" src="assets/save-white-outline.svg"></img>
            <div id="save-btn-text">Save to Recipe Box</div>
        </div>
        <div className="print-recipe-btn">
        <a href="javascript:window.print()"><img className="print-recipe-icon" src="assets/rdp-print.svg"></img></a>
        </div>
      </div>
    </div>
    <div className="recipe-description-container">
      <p className="recipe-description">{props.description}</p>
      <img className="recipe-image" src="assets/bibimbap.jpg" />
    </div>
  </section>
)

export default RecipeHeader;