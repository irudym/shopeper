class Director::DashboardController < DirectorController
  before_action :set_title

  def index

  end

  private

  def set_title
    @title = 'Dashboard'
    @current_menu = 'dashboard'
  end
end
