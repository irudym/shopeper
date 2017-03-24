class AddTrashFieldToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :trash, :boolean, default: false
  end
end
