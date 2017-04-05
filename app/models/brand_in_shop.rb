class BrandInShop < ApplicationRecord
  belongs_to :shop
  belongs_to :brand
end
