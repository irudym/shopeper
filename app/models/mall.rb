class Mall < DirectorRecord
  belongs_to :picture, optional: true

  has_many :shop_in_malls
  has_many :shops , through: :shop_in_malls

  validates :name, presence: true
end
