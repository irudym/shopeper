class Mall < DirectorRecord
  belongs_to :picture, optional: true

  has_many :shop_in_malls
  has_many :shops , through: :shop_in_malls

  validates :name, presence: true

  def shop_ids
    shops.inject([]) do |acc, shop|
      acc << shop.id
    end
  end

  def update_with_shops(params, shops_ids)
    mall_shop_ids = shop_ids
    add_shops = Shop.where(id: (shops_ids - mall_shop_ids))
    shops.delete(Shop.where(id: (mall_shop_ids - shops_ids)))
    shops << Shop.where(id: add_shops)

    update(params)
  end
end
