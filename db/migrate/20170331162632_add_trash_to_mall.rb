class AddTrashToMall < ActiveRecord::Migration[5.0]
  def change
    add_column :malls, :trash, :boolean, default: false
  end
end
