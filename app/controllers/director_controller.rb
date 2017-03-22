class DirectorController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'director'
end
