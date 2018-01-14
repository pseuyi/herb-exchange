class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.create(create_user_params)
    if @user.save
     response = { message: "User #{user_params[:username]} created!", user: @user }
     render json: response, status: :created
    else
     render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(params)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def create_user_params
    params.permit(:name, :username, :password, :location, :description)
    params.require(:name, :username, :password)
  end
end
