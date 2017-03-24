class Brand < ApplicationRecord
  belongs_to :picture
  validates :name, presence: true
  
  include TrashBin
end
