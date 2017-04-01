class CreateItemPictures < ActiveRecord::Migration[5.0]
  def change
    create_table :item_pictures do |t|
      t.references :item, foreign_key: true
      t.references :picture, foreign_key: true

      t.timestamps
    end
  end
end
