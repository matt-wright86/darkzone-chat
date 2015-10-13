class Api::ChatroomsController < ApplicationController

  before_action :authenticate_user!

  def show
    @chatroom = Chatroom.find params[:id]
  end


end
