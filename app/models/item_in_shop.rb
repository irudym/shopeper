class ItemInShop < DirectorRecord
  belongs_to :item
  belongs_to :color
  belongs_to :size
  belongs_to :shop_in_mall, optional: true
end
