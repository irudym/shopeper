class Shop < DirectorRecord
  belongs_to :mall
  has_many :items
end
