class Admin < ApplicationRecord
  belongs_to :user

  def self.add_admin(user)
    puts "Add user: #{user.email}"
    Admin.create!(user_id: user.id)
  end

end
