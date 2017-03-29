class Director::ItemsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_item, only: [:edit, :destroy, :update]


  def index

  end

  def show
  end

  def new
    @item = Item.new
  end

  def create
    puts "PARAMS: #{params}"
    image = {id: nil}
    if item_params[:image]
      image = Picture.create(name: item_params[:name], image: item_params[:image], description: "Image of #{item_params[:name]} item")
    else
      image = Picture.where(id: item_params[:image_id]).first if item_params[:image_id]
    end
    puts "IMAGE: #{image}"
    # @item = Item.new(item_params)
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
    params.require(:item).permit(:name, :description, :brand, :type, :image, :image_id, :pic1, :pic2, :pic3)
  end

  def set_item
    @item = Item.where(id: params[:id]).first
  end
end
