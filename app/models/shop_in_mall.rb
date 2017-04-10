class ShopInMall < ApplicationRecord
  belongs_to :shop
  belongs_to :mall
  has_many :item_in_shops
end
