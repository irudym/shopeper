class AddDescriptionAndRemoveMallRefInShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :description, :text
    add_reference :shops, :brand, index: true
    remove_foreign_key :shops, :mall_id
    remove_reference :shops, :mall, index: true
  end
end
