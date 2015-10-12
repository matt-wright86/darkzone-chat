class Api::MessagesController < ApplicationController

  def create
      @chat = Chatroom.find params[:id]
      @message = Message.new params.require(:message).permit(:text, :chatroom_id, :user_id)
      @message.chatroom = @msg

      if @message.save
        render json: {message: @message}
      else
        render status: 422, json: @message.errors
      end
    end

end
