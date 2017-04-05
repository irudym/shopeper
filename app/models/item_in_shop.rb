class ItemInShop < ApplicationRecord
  belongs_to :item
  belongs_to :shop_in_mall
end
