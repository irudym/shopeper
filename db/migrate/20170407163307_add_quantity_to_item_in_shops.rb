class AddQuantityToItemInShops < ActiveRecord::Migration[5.0]
  def change
    add_column :item_in_shops, :quantity, :integer
  end
end
