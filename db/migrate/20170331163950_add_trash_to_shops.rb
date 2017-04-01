class AddTrashToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :trash, :boolean, default: false
  end
end
