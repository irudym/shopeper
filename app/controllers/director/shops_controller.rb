class Director::ShopsController < DirectorController
  before_action :set_shop, only: [:show, :edit, :update, :destroy]
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_title

  def index
    @shops = Shop.where(trash: false)
  end

  def show
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_shop
    @shop = Shop.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def shop_params
    params.require(:mall).permit(:name, :address)
  end

  def set_title
    @title = 'Shops'
  end

  def set_menu
    trash_count = Shop.trash_bin.count
    @menu = [
        {text: 'Add shop', url: new_director_shop_path, icon: 'plus'},
        {text: "Trash (#{trash_count})", url: director_shops_trash_path, icon: 'trash'}
    ]
  end

end
