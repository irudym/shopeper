class DestroyDirectorTypes < ActiveRecord::Migration[5.0]
  def change
    drop_table :director_types
  end
end
