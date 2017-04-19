class ShopInMall < ApplicationRecord
  belongs_to :shop
  belongs_to :mall
  has_many :item_in_shops


  def self.items(conditions)
    self.where(conditions).first.item_in_shops.where(trash: false).inject([]) do |acc, item|
      acc << {id: item.id,
              item: item.item.name,
              brand: item.item.brand.name,
              size: item.size.name,
              color: item.color.name,
              price: item.price,
              quantity: item.quantity
      }
    end
  end
end
