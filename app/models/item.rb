class Item < DirectorRecord

  belongs_to :shop
  validates :name, presence: true
end
