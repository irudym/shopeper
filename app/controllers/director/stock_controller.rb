class Director::StockController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index]

  def index
  end

  def new
    @malls = Mall.to_options.to_json
    @shops = Shop.to_options.to_json

    @items = Item.to_options.to_json
    @sizes = Size.to_options.to_json
    @colors = Color.to_options.to_json

    @item_in_shop = ItemInShop.new
  end

  def edit
  end

  def trash
  end

  def destroy
  end

  def create
  end

  private

  def set_title
    @title = 'Stock'
    @current_menu = 'stock'
  end

  def set_menu
    trash_count = ItemInShop.trash_bin.count
    @menu = [
        {text: 'Add record', url: new_director_stock_path, icon: 'plus'},
        {text: "Trash (#{trash_count})", url: director_stock_trash_path, icon: 'trash'}
    ]
  end
end
