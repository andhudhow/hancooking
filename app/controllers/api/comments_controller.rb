class Api::CommentsController < ApplicationController
  def create
    @recipe = Recipe.find_by(id: params[:recipe_id])
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.recipe_id = params[:recipe_id]

    if @comment.save
      render '/api/recipes/show'
    else
      render json: @comment.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    return nil unless @comment
    @recipe = Recipe.find_by(id: @comment.recipe_id)

    if @comment&.destroy
      render '/api/recipes/show'
    else
      render json: ['Unable to delete comment.']
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
  
end
