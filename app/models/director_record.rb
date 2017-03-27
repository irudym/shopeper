class DirectorRecord < ActiveRecord::Base
  include TrashBin
  self.abstract_class = true

  def name=(val)
    write_attribute(:name, val.downcase)
  end
end