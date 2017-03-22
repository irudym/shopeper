class Shop < ApplicationRecord
  belongs_to :mall
  has_many :items
end
