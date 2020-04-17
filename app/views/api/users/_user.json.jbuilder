json.extract! user, :id, :email, :nickname
json.savedRecipeIds user.saved_recipes.ids
json.ratedRecipeIds user.rated_recipes.ids

json.set! :saved_recipes do
  user.saved_recipes.each do |recipe|
    json.set! recipe.id do
      json.extract! recipe, :title, :author_name, :min_duration
      json.photoUrl url_for(recipe.photo)
    end
  end
end