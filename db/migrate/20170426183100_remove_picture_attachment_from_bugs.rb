class RemovePictureAttachmentFromBugs < ActiveRecord::Migration[5.0]
  def change
    remove_attachment :bugs, :picture
    add_attachment :bugs, :image
  end
end
