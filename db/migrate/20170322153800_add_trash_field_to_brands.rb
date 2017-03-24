class AddTrashFieldToBrands < ActiveRecord::Migration[5.0]
  def change
    add_column :brands, :trash, :boolean, default: false
  end
end
