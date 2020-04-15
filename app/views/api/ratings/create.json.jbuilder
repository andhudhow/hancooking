json.extract! @recipe, :id, :avg_rating, :num_ratings

json.set! :ratings do
  @recipe.ratings.each do |rating|
    json.set! rating.id do
      json.extract! rating, :id, :user_id, :star_rating
    end
  end
end

json.ratedRecipeIds @user.rated_recipes.ids