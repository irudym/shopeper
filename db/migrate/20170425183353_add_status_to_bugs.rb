class AddStatusToBugs < ActiveRecord::Migration[5.0]
  def change
    add_column :bugs, :status, :integer, default: 0
  end
end
