class ItemPicture < ApplicationRecord
  belongs_to :item
  belongs_to :picture
end
