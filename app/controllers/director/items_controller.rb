class Director::ItemsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index]
  before_action :set_item, only: [:edit, :destroy, :update]


  def index
    @items = Item.where(trash: false)
  end

  def trash
    @items = Item.where(trash: true)
    @menu = [
        {text: 'New type', url: new_director_item_path, icon: 'pencil'},
        {text: "All (#{Item.where(trash: false).count})", url: director_items_path, icon: 'tag'}
    ]
  end

  def show
  end

  def new
    @item = Item.new
    @token = current_user.authentication_token
    @types = Type.to_options.to_json
    @brands = Brand.to_options.to_json
  end

  def create
    images = []
    images << item_params[:image1] if item_params[:image1]
    images << item_params[:image2] if item_params[:image2]
    images << item_params[:image3] if item_params[:image3]

    pictures = []
    images.each_with_index do |item, i|
      image = Picture.new(name: "#{item_params[:name]}_picture#{i}",
                             image: item,
                             description: "Image of #{item_params[:name]} item")
      pictures << image if image.save
    end

    @item = Item.new(name: item_params[:name],
                      type_id: item_params[:type],
                      brand_id: item_params[:brand],
                      description: item_params[:description])

    @item.pictures << pictures
    respond_to do |format|
      if @item.save
        format.html { redirect_to director_items_path, notice: 'Item was created.' }
        format.json { render :show, status: :created, location: @item }
      else
        format.html { render :new }
        format.json { render json: @items.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /director/items/1
  # DELETE /director/items/1.json
  def destroy
    @item.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_items_path, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    respond_to do |format|
      message = 'Item was successfully updated.'
      message = 'Item was restored' unless item_params[:trash]
      item_params[:trash] = @item.trash if item_params[:trash].nil?

      # fix update fields: type => type_id and so on
      update_params = item_params.inject({}) do |c, (key,value)|
        case key
          when 'type'
            c.merge Hash[:type_id, value]
          when 'brand'
            c.merge Hash[:brand_id, value]
          else
            c.merge Hash[key, value]
        end
      end

      if @item.update(update_params)
        format.html { redirect_to director_items_path, notice: message }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @types = Type.to_options
    @brands = Brand.to_options
  end

  private

  def set_title
    @title = "Items"
    @current_menu = 'items'
  end

  def set_menu
    trash_count = Item.trash_bin.count
    @menu = [
        {text: 'New item', url: new_director_item_path, icon: 'pencil'},
        {text: "Trash (#{trash_count})", url: director_items_trash_path, icon: 'trash'}
    ]
  end

  def item_params
    params.require(:item).permit(:name, :description, :brand, :type, :image1, :image1_id, :image2, :image2_id, :image3, :image3_id, :trash)
  end

  def set_item
    @item = Item.where(id: params[:id]).first
  end
end
