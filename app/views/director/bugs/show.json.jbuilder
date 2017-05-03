json.extract! @bug, :id, :title, :description
json.picture @bug.picture.url
json.medium @bug.picture.url :medium
json.comments @bug.comments