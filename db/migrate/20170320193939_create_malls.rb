class CreateMalls < ActiveRecord::Migration[5.0]
  def change
    create_table :malls do |t|
      t.string :name
      t.string :address

      t.timestamps
    end
  end
end
