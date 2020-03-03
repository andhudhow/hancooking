class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Can't find user"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
