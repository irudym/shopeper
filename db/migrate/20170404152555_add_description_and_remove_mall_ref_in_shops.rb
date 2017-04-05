class AddDescriptionAndRemoveMallRefInShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :description, :text
    add_reference :shops, :brand, index: true
    remove_column :shops, :mall_id
  end
end
