class AddDescriptionAndPictureToMalls < ActiveRecord::Migration[5.0]
  def change
    add_column :malls, :description, :text
    add_reference :malls, :picture, foreign_key: true
  end
end
