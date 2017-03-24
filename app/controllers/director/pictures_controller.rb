class Director::PicturesController < DirectorController
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_picture, only: [:show, :edit, :update, :destroy]
  before_action :set_title

  def index
    @pictures = Picture.where(trash: false)
  end

  def show
  end

  def edit
    @title = 'Edit picture'
  end

  def new
    @title = 'Add picture'
    @picture = Picture.new
  end

  def update
    respond_to do |format|
      if @picture.update(picture_params)
        format.html { redirect_to director_pictures_path, notice: "Picture [#{@picture.name}] was successfully updated." }
        format.json { render :show, status: :ok, location: @picture }
      else
        format.html { render :edit }
        format.json { render json: @picture.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @picture = Picture.new(picture_params)
    respond_to do |format|
      if @picture.save
        format.html { redirect_to director_pictures_path, notice: 'Picture was uploaded.' }
        format.json { render :show, status: :created, location: @picture }
      else
        format.html { render :new }
        format.json { render json: @picture.errors, status: :unprocessable_entity }
      end
    end
  end

  def trash
    @pictures = Picture.trash_bin
  end

  def destroy
    name = @picture.name
    @picture.put_to_trash
    respond_to do |format|
      format.html { redirect_to  director_pictures_path, notice: "Picture [#{name}]was successfully deleted." }
      format.json { head :no_content }
    end
  end

  private

  def set_menu
    trash_count = Picture.trash_bin.count
    @menu = [
        {text: 'Add picture', url: new_director_picture_path, icon: 'plus'},
        {text: "Trash (#{trash_count})", url: director_pictures_trash_path, icon: 'trash'}
    ]
  end

  def set_title
    @title = 'Pictures'
  end

  def set_picture
    @picture = Picture.where(id: params[:id]).first
  end

  def picture_params
    params.require(:picture).permit(:name, :description, :image, :trash)
  end


end
