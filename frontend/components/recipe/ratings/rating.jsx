import React, { useState } from 'react';

export const Rating = (props) => {
    let {
        recipe,
        ratings,
        currentUser,
        match,
        updateRating,
        createRating
    } = props;
    
    const [ratingHover, setRatingHover ] = useState(false);
    const [starHover, setStarHover ] = useState(recipe ? recipe.avgRating : 0);
    const [ratingText, setRatingText ] = useState("Rate Recipe");
    const ratingTextOptions = [   
        "Rate Recipe",
        "Not Worth It",
        "Fine",
        "Good",
        "Really Good",
        "Delicious"
    ];
    let starRating = [];

    const handleRatingSubmit = val => {

        if (currentUser.ratedRecipeIds.includes(parseInt(match.params.recipeId))) { 
          updateRating({
            recipe_id: recipe.id,
            star_rating: val
          })
        } else {
          createRating({
            recipe_id: recipe.id,
            star_rating: val
          })
        }
    };
    
    const handleStarHover = val => {
        setStarHover(val);
        setRatingText(ratingTextOptions[val]);
    };

    const hoverStarRating = () => {
        let hoverStarRating = [];

        for(let i = 1; i <= 5; i++) {
            hoverStarRating.push(
            <img src={starHover >= i
                ? window.starYellowURL
                : window.starEmptyURL}
                onMouseOver={()=>handleStarHover(i)}
                onClick={()=>handleRatingSubmit(i)}
            />)
        }
        
        return hoverStarRating.map(star => star);
    };

    const currentStarRating = () => {
        if (recipe) {
            if (ratings[0]
                && currentUser.ratedRecipeIds
                    .includes(parseInt(match.params.recipeId))
            ) {

                const currentUserRatings = 
                    ratings.filter(rating => rating.userId === currentUser.id);

                const currentUserRating =
                    currentUserRatings.length > 0 && currentUserRatings[0]
                    ? currentUserRatings[0].starRating
                    : null;

                for(let i = 1; i <= 5; i++) {
                    starRating.push(
                    <img src={currentUserRating >= i
                        ? window.starYellowURL
                        : window.starEmptyURL }
                    />)
                }
            } else {
                for(let i = 1; i <= 5; i++) {
                    starRating.push(
                        <img src={recipe.avgRating >= i
                            ? window.starRedURL
                            : window.starEmptyURL }
                        />
                    )
                }
            }
        }
        
        return starRating.map(star => star);
    };
    
    return (
        <div className="recipe-metadata-container">
            <div className={ratingHover ?
                "rating-tooltip-open"
                : "rating-tooltip-closed"}
                onMouseLeave={()=>setRatingHover(false)}
            >
                <span className = "rating-text">{ratingText}</span>
                <div className = "recipe-rating-avg-stars">
                { hoverStarRating() }
                </div>
            </div>
          <div className="rating-total">{recipe.numRatings} ratings</div>
          <div className="star-rating"
            onMouseEnter={() => setRatingHover(true)}
          >
            <div className = "recipe-rating-avg-stars">
                { currentStarRating() }
            </div>
          </div>
        </div>
    )
}