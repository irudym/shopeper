class AddTrashFieldToPictures < ActiveRecord::Migration[5.0]
  def change
    add_column :pictures, :trash, :boolean, default: false
  end
end
