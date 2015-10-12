class ZoneController < ApplicationController

  before_action :authenticate_user!

  def index
    @users = User.all
    @chatrooms = Chatroom.all
  end



end
