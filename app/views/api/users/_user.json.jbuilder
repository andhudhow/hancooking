json.extract! user, :id, :email
json.savedRecipeIds user.saved_recipes.ids

json.set! :saved_recipes do
  user.saved_recipes.each do |recipe|
    json.set! recipe.id do
      json.extract! recipe, :title, :author_name, :min_duration
    end
  end
end