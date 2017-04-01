class Type < DirectorRecord
  belongs_to :picture, optional: true
  validates :name, presence: true
end
