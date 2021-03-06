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