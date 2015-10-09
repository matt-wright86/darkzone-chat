50.times do

  User.create  username: Faker::Internet.user_name, password_digest: "12345678", email: Faker::Internet.email

end
