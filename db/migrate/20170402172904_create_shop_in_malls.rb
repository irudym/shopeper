class CreateShopInMalls < ActiveRecord::Migration[5.0]
  def change
    create_table :shop_in_malls do |t|
      t.references :shop, foreign_key: true
      t.references :mall, foreign_key: true

      t.timestamps
    end
  end
end
