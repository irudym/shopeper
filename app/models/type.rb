class Type < DirectorRecord
  belongs_to :picture
  validates :name, presence: true
end
