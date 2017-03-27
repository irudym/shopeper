#add picture
FactoryGirl.define do
  factory :picture do
    name "test picture"
    image_file_name "test.png"
    image_content_type "image/png"
    image_file_size "28741"
    trash false
    description "test image"
  end
end
