class Shop < DirectorRecord
  has_many :brand_in_shops
  has_many :brands, through: :brand_in_shops

  validates :name, presence: true

  def list_of_brands
    brands.inject('') do |res, brand|
      res += brand.name + ', '
    end
  end

  def brand_ids
    brands.inject([]) do |acc, brand|
      acc << brand.id
    end
  end

  def update_with_brands(params, brands_ids)
    shop_brand_ids = brand_ids
    add_brands = Brand.where(id: (brands_ids - shop_brand_ids))
    puts "Delete shops where: #{(shop_brand_ids - brands_ids)}"
    brands.delete(Brand.where(id: (shop_brand_ids - brands_ids)))
    brands << Brand.where(id: add_brands)

    update(params)
  end
end
