class Picture < DirectorRecord
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  has_many :item_pictures
  has_many :items, through: :item_pictures


  # Validate content type
  validates_attachment_content_type :image, content_type: /\Aimage/
  # Validate filename
  validates_attachment_file_name :image, matches: [/png\z/, /jpe?g\z/]
  # Explicitly do not validate
  do_not_validate_attachment_file_type :image

  validates :name, presence: true
end