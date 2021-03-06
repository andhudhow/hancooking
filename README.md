![logo](img/logo.png)
# Hancooking

[HanCooking](http://hancooking.herokuapp.com/#/) is inspired by [New York Times Cooking](https://cooking.nytimes.com/) and focuses on modern and classic Korean cuisine. Users can discover recipes, rate them, comment on them, and save them to a Recipe Box for easy reference in the future.

![home](img/homepage.gif "HanCooking")

## Technologies used
* Front-end:
  * React
  * Redux
  * Edamam Nutritional Analysis API
* Back-end
  * Ruby on Rails
  * PostgreSQL
* Cloud:
  * AWS S3
  * Heroku

## Features
* #### Recipes - beautiful recipe pages with ability to rate, add notes, and view nutritional information
  ![recipe_show](img/recipe_show.gif "Recipe Pages")

* #### Recipe Box - save recipes to your Recipe Box for easy future access
  ![recipe_box](img/recipe_box.gif "Recipe Box")

* #### Search - search for recipes by title or description
  ![search](img/search.gif "Search")

* #### Rating - see the commmunity's average rating and provide your rating on a scale to 1-5
  ![rating](img/rating.gif "Rating")

* #### Notes - view recipe notes left by others and leave your own
  ![notes](img/comment.gif "Notes")

* #### Nutritional information - powered by the Edamam API, view the nutritional contents of a recipe
  ![nutrition](img/nutr.gif "Nutrition")

### Code Snippets

#### Star Ratings
To implement star ratings, the `useState` React Hook to manage local state for
detecting if the user is hovering over the rating component, which star they're
hovering over, and which text should be displayed based on the star hover.

The user can then click on the star to create a new rating or update an existing
rating where the value they've rated the recipe is determined by the star that
is clicked.

```javascript
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
        //if the user has already submitted the recipe, use updateRating to
        //update their existing rating, else create a new rating
        if (currentUser.ratedRecipeIds
            .includes(parseInt(match.params.recipeId))) { 
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
        //show filled stars based on which star is being hovered on
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
        //if we have a current recipe and the user has already rated the recipe
        //find and display their rating, else show the community's avg rating
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
```

### Nutritional Info
The `useEffect` and `useState` React Hooks are used to call and manage data from the [Edamam Nutritional Analysis API](https://developer.edamam.com/edamam-docs-nutrition-api). If Edamam is unable to produce a high-quality result it will return a 555 HTTP error and occassionally will return a response with only certain macronutrients (e.g., Fiber content may not be available). This is guarded against by not displaying the nutritional data tooltip when a 555 error received or if a success response is received but not all data points are available, first checking for a data point's presence before trying to render it.

```javascript
import React, { useEffect, useState } from 'react';

import { fetchNutritionData } from '../../../util/nutr_info_api_util';

export const NutritionalData = props => {
    const [nutrHover, setNutrHover] = useState(false);
    const [nutrInfo, setNutrInfo] = useState(nutrInfo);
    let { recipe, ingredients } = props;
    let ingr = [];

    //prep ingredient list for request to Edamam
    ingredients.forEach(
        ingredient => ingr.push(
            (ingredient.quantity + " " + ingredient.description)
        )
    );

    const nutrData = {
        title: recipe.title,
        yield: recipe.servings + "servings",
        ingr
    };
    
    useEffect(() => {
        fetchNutritionData(nutrData)
        .then(payload => setNutrInfo(payload))
        .fail(() => {
            console.clear();
            console.log("No nutritional data available from Edamam.")
        })
    }, []);

    return (
        nutrInfo ? 
        <div className="nutr-container"
            onMouseLeave = {() => setNutrHover(false)}
        >
            <div className='nutr-header'>
                <img className='nutr-icon' 
                    src={window.nutrInfoIconOutline}
                    onMouseEnter = {() => setNutrHover(true)}
                />
                <span className="nutr-header-text" 
                    onMouseEnter = {() => setNutrHover(true)}
                > Nutritional Information
                </span>
            </div>
            <div className={
                    nutrHover ? "nutr-list" : "nutr-hidden"} >
                <div className="nutr-index-header">Based on {recipe.servings} servings:</div>
                {
                    nutrInfo.calories
                    ? <li>Calories: {Math.floor(nutrInfo.calories)}</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.CHOCDF
                    ? <li>Carbs: {Math.floor(nutrInfo.totalNutrients.CHOCDF.quantity)} grams </li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.FAT
                    ? <li>Fat: {Math.floor(nutrInfo.totalNutrients.FAT.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.FATRN
                    ? <li>Trans Fat: {Math.floor(nutrInfo.totalNutrients.FATRN.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.FAMS
                    ? <li>Monosaturated Fat: {Math.floor(nutrInfo.totalNutrients.FAMS.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.FAPU
                    ? <li>Polyunsaturated Fat: {Math.floor(nutrInfo.totalNutrients.FAPU.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.FIBTG
                    ? <li>Fiber: {Math.floor(nutrInfo.totalNutrients.FIBTG.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.SUGAR
                    ? <li>Sugar: {Math.floor(nutrInfo.totalNutrients.SUGAR.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.PROCNT
                    ? <li>Protein: {Math.floor(nutrInfo.totalNutrients.PROCNT.quantity)} grams</li>
                    : null
                }
                {
                    nutrInfo.totalNutrients.NA ?
                    <li>Sodium: {Math.floor(nutrInfo.totalNutrients.NA.quantity)} grams</li>
                    : null
                }
                <p className="nutrition-note">Note: The information shown is Edamam’s estimate based on available ingredients and preparation. It should not be considered a substitute for a professional nutritionist’s advice.</p>
                <p className="nutrition-attribution">Powered by 
                    <img id="edamam-logo" src="https://static01.nyt.com/applications/cooking/982798d/assets/edamam-logo.png" />
                </p>
            </div>
        </div>
        : null
    )
} 
```

### Recipes backend
In addition to an Index and Show route the Recipes Controller also uses a `save` and `unsave` custom routes for Recipe Saves that a user makes to their Recipe Box:

```ruby
#Backend routes
# / routes.rb
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :recipes, only: [:index, :show] do
      post 'save'
      delete 'unsave'
      resources :comments, only: [:create]
      resources :ratings, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :ratings, only: [:update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
```
```Ruby
# / recipes_controller.rb
class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    if @recipes
      render 'api/recipes/index'
    else
      render json: recipe_save.errors.full_messages, status: 422
    end
  end

  def show
    @recipe = Recipe
      .includes(:ingredients, :prep_steps, :ratings, comments: [:user])
      .find_by(id: params[:id])
  end

  def save
    @user = current_user
    recipe_save = RecipeSave.new({
      recipe_id: params[:recipe_id],
      user_id: @user.id
    })

    if recipe_save.save
      render 'api/users/show'
    else
      render json: recipe_save.errors.full_messages, status: 422
    end

  end

  def unsave
    @user = current_user
    recipe_save = RecipeSave.find_by({
      recipe_id: params[:recipe_id],
      user_id: @user.id
    })

    if recipe_save && recipe_save.destroy
      render 'api/users/show'
    else
      render json: ['No recipe save found to delete'], status: 422
    end
  end
  
end
```

For the Recipe Show page, jBuilder is used to shape the JSON response back to the front end so that it can easily be processed into the relevant slices of Redux state:

```Ruby
# views/recipes/show.jbuilder
json.set! :recipe do
  json.partial! 'api/recipes/recipe', recipe: @recipe
  json.ingredientIds @recipe.ingredients.ids
  json.prep_steps @recipe.prep_steps.order(:step).ids
end

json.set! :ingredients do
  @recipe.ingredients.each do |ingredient|
    json.set! ingredient.id do
      json.extract! ingredient, :recipe_id, :quantity, :description
    end
  end
end

json.set! :prepSteps do
  @recipe.prep_steps.each do |prep_step|
    json.set! prep_step.id do
      json.extract! prep_step, :recipe_id, :step, :description
    end
  end
end

json.set! :comments do
  @recipe.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :user_id, :body, :created_at
      json.nickname comment.user.nickname
      json.avatarUrl url_for(comment.user.avatar)
    end
  end
end

json.set! :ratings do
  @recipe.ratings.each do |rating|
    json.set! rating.id do
      json.extract! rating, :id, :user_id, :star_rating
    end
  end
end
```

### Future features
* Grocery list - add ingredients to a shopping list
* Mark as Cooked - indicate which recipes you've already cooked
* Local Korean market finder