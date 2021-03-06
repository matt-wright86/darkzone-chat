class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new params.require(:user).permit(:email, :password, :password_confirmation, :username)
    if @user.save
      sign_in @user
      redirect_to root_path, notice: "Welcome to darkzone, #{@user.email}"
    else
      render :new
    end
  end

end
