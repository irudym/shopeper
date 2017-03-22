class AddReferenceToMallToShop < ActiveRecord::Migration[5.0]
  def change
    add_reference :shops, :mall, foreign_key: true
  end
end
