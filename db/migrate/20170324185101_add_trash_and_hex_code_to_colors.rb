class AddTrashAndHexCodeToColors < ActiveRecord::Migration[5.0]
  def change
    add_column :colors, :trash, :boolean, default: false
    add_column :colors, :hex_code, :string
  end
end
