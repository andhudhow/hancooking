class CommentsController < ApplicationController
  def create
    @comment = Comment.new(
      user_id: current_user.id,
      recipe_id: params[:recipe_id],
      body: params[:body]
    )

    if @comment.save
      render '/recipe/recipes/show'
    else
      render json: @comment.full_errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    return nil unless @comment

    if @comment&.destroy
      render '/recipe/recipes/show'
    else
      render json: ['Unable to delete comment.']
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :recipe_id, :body)
  end
  
end
