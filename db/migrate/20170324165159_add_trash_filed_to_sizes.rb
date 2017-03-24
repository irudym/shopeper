class AddTrashFiledToSizes < ActiveRecord::Migration[5.0]
  def change
    add_column :sizes, :trash, :boolean, default: false
  end
end
