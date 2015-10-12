class CreateChatrooms < ActiveRecord::Migration
  def change
    create_table :chatrooms do |t|
      t.string :roomname

      t.timestamps null: false
    end
  end
end
