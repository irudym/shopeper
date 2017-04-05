class CreateBrandInShops < ActiveRecord::Migration[5.0]
  def change
    create_table :brand_in_shops do |t|
      t.references :shop, foreign_key: true
      t.references :brand, foreign_key: true

      t.timestamps
    end
  end
end
