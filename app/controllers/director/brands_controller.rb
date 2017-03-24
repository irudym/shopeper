class Director::BrandsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]

  def index
    @brands = Brand.where(trash:false)
  end

  def show
  end

  def new
    @brand = Brand.new
    @pictures = Picture.where(trash: false)
  end

  def create
    puts "brand_params: #{brand_params[:brand]}"
    @image = {id: nil}
    if brand_params[:image]
      @image = Picture.create(name: brand_params[:name], image: brand_params[:image], description: "Image of #{brand_params[:name]} logo")
    else
      @image = Picture.where(id: brand_params[:image_id]).first if brand_params[:image_id]
    end

    @brand = Brand.new(name: brand_params[:name], description: brand_params[:description], picture_id: @image[:id])
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

  private

  def set_title
    @title = 'Brands'
  end

  def set_menu
    trash_count = Brand.trash_bin.count
    @menu = [
        {text: 'New brand', url: new_director_brand_path, icon: 'pencil'},
        {text: "Trash (#{trash_count})", url: director_pictures_trash_path, icon: 'trash'}
    ]
  end

  def brand_params
    params.require(:brand).permit(:name, :description, :image, :image_id)
  end
end
