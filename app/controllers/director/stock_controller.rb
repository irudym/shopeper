class Director::StockController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index]
  before_action :set_item, only: [:destroy, :update, :edit]

  def index
    @malls = Mall.to_options.to_json
  end

  def new
    @malls = Mall.to_options.to_json
    @shops = Shop.to_options.to_json

    @items = Item.to_options_with_brand.to_json
    @sizes = Size.to_options.to_json
    @colors = Color.to_options.to_json

    @item_in_shop = ItemInShop.new
  end

  def items
    @items = ShopInMall.items(mall_id: params[:mall], shop_id: params[:shop])
  end

  def edit
    @items = Item.to_options_with_brand.to_json
    @sizes = Size.to_options.to_json
    @colors = Color.to_options.to_json
  end

  def update
  end

  def trash
    @items = ItemInShop.where(trash: true)
    @menu = [
        {text: 'Add record', url: new_director_stock_path, icon: 'plus'},
        {text: "Stock (#{ItemInShop.where(trash:false).count})", url: director_stock_index_path, icon: 'dropbox'}
    ]
  end

  def destroy
    @item.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_stock_index_path, notice: 'Item was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  def create
    # get shop_in_mall ID
    additions = JSON.parse(params[:item_in_stock][:additions])
    records = JSON.parse(params[:item_in_stock][:records])
    shop_in_mall = ShopInMall.where(shop_id: additions["shop"]["id"], mall_id: additions["mall"]["id"]).first
    errors = []

    records.each do |record|
      values = record["values"]
      item_in_shop = ItemInShop.new(item_id: values[0]["id"],
        color_id: values[1]["id"],
        size_id: values[2]["id"],
        price: values[3]["value"].to_f,
        quantity: values[4]["value"].to_i)
      if item_in_shop.save
        shop_in_mall.item_in_shops << item_in_shop
      else
        errors << item_in_shop.errors
      end
    end

    respond_to do |format|
      if errors.empty?
        format.html { redirect_to director_stock_index_path, notice: 'Items were successfully added.' }
      else
        format.html {
          @item_in_shop = ItemInShop.new
          @item_in_shop.errors.add(errors)
          render :new
        }
        format.json { render json: errors, status: :unprocessable_entity }
      end
    end

    # get data from params
    # records = JSON.parse(params[:item_in_stock][:records])[:values]
    # records.each do |record|
    #   @item_in_shop = ItemInShop
    # end
  end

  def update
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to director_stock_index_path, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
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

  def set_item
    @item = ItemInShop.where(id: params[:id]).first
  end

  def item_params
    params.require(:item).permit(:trash, :item_id, :size_id, :color_id, :quantity, :price)
  end
end
