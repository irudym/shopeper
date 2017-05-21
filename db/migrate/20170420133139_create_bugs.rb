class CreateBugs < ActiveRecord::Migration[5.0]
  def change
    create_table :bugs do |t|
      t.string :title
      t.text :description
      t.boolean :owned, default: false
      # t.references :picture, foreign_key: true
      t.boolean :trash, default: false
      t.timestamps
    end
  end
end
