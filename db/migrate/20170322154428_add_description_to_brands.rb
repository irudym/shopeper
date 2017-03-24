class AddDescriptionToBrands < ActiveRecord::Migration[5.0]
  def change
    add_column :brands, :description, :text
  end
end
