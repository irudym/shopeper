class Director::ItemsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_item, only: [:edit, :destroy, :update]


  def index

  end

  def show
  end

  private

  def set_title
    @title = "Items"
  end

  def set_menu
    trash_count = Item.trash_bin.count
    @menu = [
        {text: 'New item', url: new_director_item_path, icon: 'pencil'},
        {text: "Trash (#{trash_count})", url: director_items_trash_path, icon: 'trash'}
    ]
  end

  def item_params
    params.require(:item).permit(:name, :description, )
  end

  def set_item
    @item = Item.where(id: params[:id]).first
  end
end
