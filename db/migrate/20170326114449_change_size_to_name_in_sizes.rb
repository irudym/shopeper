class ChangeSizeToNameInSizes < ActiveRecord::Migration[5.0]
  def change
    add_column :sizes, :name, :string
    remove_column :sizes, :size
  end
end
