json.extract! recipe, :id, :title, :author_name, :description, :servings, :min_duration
json.photoUrl url_for(recipe.photo)