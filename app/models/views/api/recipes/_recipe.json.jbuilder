json.extract! recipe, :id, :title, :author_name, :description, :servings, :min_duration, :avg_rating, :num_ratings
json.photoUrl url_for(recipe.photo)