class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.includes(:ingredients, :prep_steps).find_by(id: params[:id])
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