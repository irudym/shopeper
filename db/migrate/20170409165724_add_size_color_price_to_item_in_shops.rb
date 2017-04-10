class AddSizeColorPriceToItemInShops < ActiveRecord::Migration[5.0]
  def change
    add_reference :item_in_shops, :size, foreign_key: true
    add_reference :item_in_shops, :color, foreign_key: true
    add_column :item_in_shops, :price, :float
  end
end
