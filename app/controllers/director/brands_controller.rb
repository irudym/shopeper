class Director::BrandsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_brand, only: [:edit, :destroy, :update]

  def index
    @brands = Brand.where(trash:false)
  end

  def show
  end

  def trash
    @brands = Brand.trash_bin
    @menu = [
        {text: 'New brand', url: new_director_brand_path, icon: 'pencil'},
        {text: "All (#{Brand.where(trash: false).count})", url: director_brands_path, icon: 'dollar'}
    ]
  end

  def new
    @title = "New brand"
    @brand = Brand.new
    @pictures = Picture.where(trash: false)
  end

  def create
    image = {id: nil}
    if brand_params[:image]
      image = Picture.create(name: brand_params[:name], image: brand_params[:image], description: "Image of #{brand_params[:name]} logo")
    else
      image = Picture.where(id: brand_params[:image_id]).first if brand_params[:image_id]
    end

    @brand = Brand.new(name: brand_params[:name], description: brand_params[:description], picture_id: image[:id])
    respond_to do |format|
      if @brand.save
        format.html { redirect_to director_brands_path, notice: 'Brand was created.' }
        format.json { render :show, status: :created, location: @brand }
      else
        format.html {
          @pictures = Picture.where(trash: false)
          render :new
        }
        format.json { render json: @brand.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def destroy
    name = @brand.name
    @brand.put_to_trash
    respond_to do |format|
      format.html { redirect_to  director_brands_path, notice: "Information about brand [#{name}] was successfully deleted." }
      format.json { head :no_content }
    end
  end

  def update
    respond_to do |format|
      if @brand.update(brand_params)
        format.html { redirect_to director_brands_path, notice: "Information about brand [#{@brand.name}] was successfully updated." }
        format.json { render :show, status: :ok, location: @brand }
      else
        format.html { render :edit }
        format.json { render json: @brand.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_title
    @title = 'Brands'
  end

  def set_menu
    trash_count = Brand.trash_bin.count
    @menu = [
        {text: 'New brand', url: new_director_brand_path, icon: 'pencil'},
        {text: "Trash (#{trash_count})", url: director_brands_trash_path, icon: 'trash'}
    ]
  end

  def brand_params
    params.require(:brand).permit(:name, :description, :image, :image_id, :trash)
  end

  def set_brand
    @brand = Brand.where(id: params[:id]).first
  end
end
