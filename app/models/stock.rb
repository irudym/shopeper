class Stock < DirectorRecord
  belongs_to :shop
  belongs_to :item
  belongs_to :size
  belongs_to :color
end
