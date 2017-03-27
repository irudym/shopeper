class Color < DirectorRecord
  validates :name, presence: true
  validates :hex_code, presence: true
end
