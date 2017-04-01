class Item < DirectorRecord
  has_many :item_pictures
  has_many :pictures, through: :item_pictures
  belongs_to :type, optional: true
  belongs_to :brand, optional: true

  validates :type, presence: true
  validates :brand, presence: true
end
