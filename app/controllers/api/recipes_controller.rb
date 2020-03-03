class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.includes(:ingredients, :prep_steps).find_by(id: params[:id])
  end
  
end