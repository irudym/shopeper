class AddPictureToBugs < ActiveRecord::Migration[5.0]
  def change
    add_attachment :bugs, :picture
  end
end
