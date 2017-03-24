class Picture < DirectorRecord

  has_attached_file :image, :styles => { :thumb => "50x50>" }
  # Validate content type
  validates_attachment_content_type :image, content_type: /\Aimage/
  # Validate filename
  validates_attachment_file_name :image, matches: [/png\z/, /jpe?g\z/]
  # Explicitly do not validate
  do_not_validate_attachment_file_type :image

  validates :name, presence: true
end