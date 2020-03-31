import React, { useState } from 'react';

export const Rating = (props) => {
    let {
        recipe,
        ratings,
        currentUser,
        match,
        avgRating,
        updateRating,
        createRating
    } = props;

    let starRating;
    
    const [ratingHover, setRatingHover ] = useState(false);
    const [starHover, setStarHover ] = useState(recipe ? recipe.avgRating : 0);
    const [ratingText, setRatingText ] = useState("Rate Recipe");

    const handleRatingSubmit = val => {
        debugger
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
    
        switch (val) {
            case 1:
                setRatingText("Not Worth It")
                break;
            case 2:
                setRatingText("Fine")
                break;
            case 3:
                setRatingText("Good")
                break;
            case 4:
                setRatingText("Really Good")
                break;
            case 5:
                setRatingText("Delicious")
                break;
            default:
                null
        };
    }

    if (recipe) {
        if (ratings[0] && currentUser.ratedRecipeIds.includes(parseInt(match.params.recipeId))) {
            let currentUserRatings = ratings.filter(rating => rating.userId === currentUser.id)
            let currentUserRating = currentUserRatings.length > 0 && currentUserRatings[0] ? currentUserRatings[0].starRating : null;

            starRating =
                <div className = "recipe-rating-avg-stars">
                    <img src={currentUserRating >= 1 ? window.starYellowURL : window.starEmptyURL }></img>
                    <img src={currentUserRating >= 2 ? window.starYellowURL : window.starEmptyURL }></img>
                    <img src={currentUserRating >= 3 ? window.starYellowURL : window.starEmptyURL }></img>
                    <img src={currentUserRating >= 4 ? window.starYellowURL : window.starEmptyURL }></img>
                    <img src={currentUserRating >= 5 ? window.starYellowURL : window.starEmptyURL }></img>
                </div> 
        } else { 
            <div className = "recipe-rating-avg-stars">
            <img src={avgRating >= 1 ? window.starRedURL : window.starEmptyURL }></img>
            <img src={avgRating >= 2 ? window.starRedURL : window.starEmptyURL }></img>
            <img src={avgRating >= 3 ? window.starRedURL : window.starEmptyURL }></img>
            <img src={avgRating >= 4 ? window.starRedURL : window.starEmptyURL }></img>
            <img src={avgRating >= 5 ? window.starRedURL : window.starEmptyURL }></img>
            </div> 
        }
    }
    
    return (
        <div className="recipe-metadata-container">
            <div className={ratingHover ? "rating-tooltip-open" : "rating-tooltip-closed"} onMouseLeave={()=>setRatingHover(false)}>
                <span className = "rating-text">{ratingText}</span>
                <div className = "recipe-rating-avg-stars">
                <img src={starHover >= 1 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>handleStarHover(1)} onClick={()=>handleRatingSubmit(1)} />
                <img src={starHover >= 2 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>handleStarHover(2)} onClick={()=>handleRatingSubmit(2)} />
                <img src={starHover >= 3 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>handleStarHover(3)} onClick={()=>handleRatingSubmit(3)} />
                <img src={starHover >= 4 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>handleStarHover(4)} onClick={()=>handleRatingSubmit(4)} />
                <img src={starHover >= 5 ? window.starYellowURL : window.starEmptyURL } onMouseOver={()=>handleStarHover(5)} onClick={()=>handleRatingSubmit(5)} />
                </div>
            </div>
          <div className="rating-total">{recipe.numRatings} ratings</div>
          <div className="star-rating" onMouseEnter={() => setRatingHover(true)}>
            {starRating}
          </div>
        </div>
    )
}