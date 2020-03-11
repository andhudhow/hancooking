class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:saved_recipes, :rated_recipes).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email/password combination"], status: 401
    end

  end

  def destroy
    if current_user
      logout
      render json: "{}"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
  
end