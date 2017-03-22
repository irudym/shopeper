class CreateBrands < ActiveRecord::Migration[5.0]
  def change
    create_table :brands do |t|
      t.string :name
      t.references :picture, foreign_key: true

      t.timestamps
    end
  end
end
