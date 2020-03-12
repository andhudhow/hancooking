class Api::RatingsController < ApplicationController

  def create
    rating = Rating.new(rating_params)
    rating.user_id = current_user.id
    rating.recipe_id = params[:recipe_id]

    if rating.save
      @recipe = Recipe.find_by(id: params[:recipe_id])
      render 'api/recipes/show'
    else
      render json: rating.errors.full_messages, status: 422
    end

  end

  def update
    rating = Rating.find_by(id: params[:id])
    if rating.update(star_rating: params[:rating][:star_rating])
      @recipe = Recipe.find_by(id: rating.recipe_id)
      render 'api/recipes/show'
    else
      render json: rating.errors.full_messages, status: 422
    end
  end

  def destroy
    rating = Rating.find_by(id: params[:id])
    @recipe = Recipe.find_by(id: rating.recipe_id)

    if rating &.destroy
      render 'api/recipes/show'
    else
      render json: rating.errors.full_messages, status: 422
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:star_rating)
  end
  
end
