class CreateDirectorTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :director_types do |t|

      t.timestamps
    end
  end
end
