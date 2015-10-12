class User < ActiveRecord::Base
  has_secure_password
  has_many :messages

  validates :username, presence: true
  validates :password, presence: true
  validates :email, presence: true
end
