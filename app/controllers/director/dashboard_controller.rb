class Director::DashboardController < DirectorController
  before_action :set_title

  def index
    @mall_count = Mall.all.count
    @shop_count = Shop.all.count
    @item_count = Item.all.count
    @brand_count = Brand.all.count
    @type_count = Type.all.count
    @bug_count = Bug.all.count
  end

  private

  def set_title
    @title = 'Dashboard'
    @current_menu = 'dashboard'
  end
end
