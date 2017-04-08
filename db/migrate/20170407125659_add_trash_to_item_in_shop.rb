class AddTrashToItemInShop < ActiveRecord::Migration[5.0]
  def change
    add_column :item_in_shops, :trash, :boolean, default: false
  end
end
