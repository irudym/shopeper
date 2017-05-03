class RemoveImageAttachmentFromBugs < ActiveRecord::Migration[5.0]
  def change
    remove_attachment :bugs, :image
    add_attachment :bugs, :picture
  end
end
