class Brand < DirectorRecord
  belongs_to :picture
  validates :name, presence: true

end
