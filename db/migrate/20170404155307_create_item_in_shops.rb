class CreateItemInShops < ActiveRecord::Migration[5.0]
  def change
    create_table :item_in_shops do |t|
      t.references :item, foreign_key: true
      t.references :shop_in_mall, foreign_key: true

      t.timestamps
    end
  end
end
