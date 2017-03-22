class Director::BrandsController < DirectorController
  before_action :set_title

  def index
  end

  def show
  end

  private

  def set_title
    @title = 'Brands'
  end
end
