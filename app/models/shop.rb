class Shop < DirectorRecord
  has_many :brand_in_shops
  has_many :brands, through: :brand_in_shops

  validates :name, presence: true

  def list_of_brands
    brands.inject('') do |res, brand|
      res += brand.name + ', '
    end
  end
end
