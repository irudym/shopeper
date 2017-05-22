class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def set_charset
    @headers["Content-Type"] = "text/html; charset=utf-8"
  end

end
