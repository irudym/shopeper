class DirectorController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'director'

  before_action :authenticate_user_from_token!

  before_action :authenticate_user!
  before_action :authenticate_admin

  def authenticate_admin
    if Admin.where(user_id: current_user.id).count == 0
      render :nothing => true, :status => 404
    end
  end

  def authenticate_user_from_token!
    user_token = params[:user_token].presence
    user = user_token && User.find_by_authentication_token(user_token.to_s)

    if user
      # Notice we are passing store false, so the user is not
      # actually stored in the session and a token is needed
      # for every request. If you want the token to work as a
      # sign in token, you can simply remove store: false.
      sign_in user, store: false
    end
  end


end
