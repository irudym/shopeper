class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.references :shop, foreign_key: true
      t.references :item, foreign_key: true
      t.references :size, foreign_key: true
      t.references :color, foreign_key: true

      t.timestamps
    end
  end
end
