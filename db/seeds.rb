100.times do
    plain = User.new

    plain.password = "12345678",
    plain.email = Faker::Internet.email,
    plain.username = Faker::Internet.user_name
    plain.save

plain.messages.create text: Faker::Lorem.sentence, chatroom_id: rand(1..6)
end

6.times do
Chatroom.create roomname: Faker::Company.buzzword
end

    matt = User.create  username: "bbk8", password: "123", email: "matt@gmail.com"
    matt.messages.create text: "welcome to the chatroom", chatroom_id: 1
