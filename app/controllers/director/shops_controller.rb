class Director::ShopsController < DirectorController
  before_action :set_shop, only: [:show, :edit, :update, :destroy]
  before_action :set_menu, only: [:index]
  before_action :set_title

  def index
    @shops = Shop.where(trash: false)
  end

  def show
  end

  def new
    @shop = Shop.new
    @brands = Brand.to_options.to_json
  end

  def edit
    @brands = Brand.to_options.to_json
    @bselected = @shop.brands.inject([]) do |acc, brand|
      acc << {id: brand[:id], value: brand[:name]}
    end.to_json
  end

  def create
    puts params.to_json
    brands_array = []
    brands_array = JSON.parse(params[:shop][:brands_in_shop]) if params[:shop][:brands_in_shop]

    brands = Brand.where(id: brands_array)

    @shop = Shop.new(shop_params)
    @shop.brands << brands

    respond_to do |format|
      if @shop.save
        format.html { redirect_to director_shops_path, notice: 'Shop was created.' }
        format.json { render :show, status: :created, location: @shop }
      else
        format.html {
          @brands = Brand.to_options.to_json
          render :new
        }
        format.json { render json: @shops.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /malls/1
  # PATCH/PUT /malls/1.json
  def update
    respond_to do |format|
      # TODO: need to update brands if changed
      if @shop.update(shop_params)
        format.html { redirect_to director_shops_path, notice: 'Shop was successfully updated.' }
        format.json { render :show, status: :ok, location: @shop }
      else
        format.html { render :edit }
        format.json { render json: @shop.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /malls/1
  # DELETE /malls/1.json
  def destroy
    @shop.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_shops_path, notice: 'Shop was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  def trash
    @shops = Shop.where(trash: true)
    @menu = [
        {text: 'New shop', url: new_director_shop_path, icon: 'pencil'},
        {text: "All (#{Shop.where(trash: false).count})", url: director_shops_path, icon: 'tag'}
    ]
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_shop
    @shop = Shop.where(id: params[:id]).first
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def shop_params
    params.require(:shop).permit(:name, :address, :description, :trash)
  end

  def set_title
    @title = 'Shops'
    @current_menu = 'shops'
  end

  def set_menu
    trash_count = Shop.trash_bin.count
    @menu = [
        {text: 'Add shop', url: new_director_shop_path, icon: 'plus'},
        {text: "Trash (#{trash_count})", url: director_shops_trash_path, icon: 'trash'}
    ]
  end

end
