class ZoneController < ApplicationController

  def index
    @users = User.all
  end
end
