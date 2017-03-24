class CreateTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :types do |t|
      t.string :name
      t.text :description
      t.references :picture, foreign_key: true
      t.boolean  "trash",       default: false
      t.timestamps
    end
  end
end
