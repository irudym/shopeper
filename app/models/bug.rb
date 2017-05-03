class Bug < DirectorRecord
  has_many :comments
  has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }

  validates :title, presence: true
  validates :description, presence: true

  # Validate content type
  validates_attachment_content_type :picture, content_type: /\Aimage/
  # Validate filename
  validates_attachment_file_name :picture, matches: [/png\z/, /jpe?g\z/]

  class << self

    def to_list
      Bug.where(trash: false).inject([]) do |acc, item|
        acc << {
            id: item.id,
            owned: item.owned,
            title: item.title,
            comments: item.comments.count
        }
      end
    end
  end
end
