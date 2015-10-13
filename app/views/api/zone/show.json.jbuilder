json.room do
  json.id @chatroom.id
  json.roomname @chatroom.roomname
  json.messages @chatroom.messages do |message|
    json.id message.id
    json.text message.text
    json.created_at message.created_at
    json.user do
      json.id message.user.id
      json.username message.user.username
    end
  end
end
