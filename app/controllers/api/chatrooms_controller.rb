class Api::ChatroomsController < ApplicationController

  def index
    @chatrooms = Chatroom.all
    @messages = Message.all
    render json: {chatRooms: @chatrooms}
  end

end
