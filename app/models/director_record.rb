class DirectorRecord < ActiveRecord::Base
  include TrashBin
  self.abstract_class = true
end