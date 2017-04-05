class Director::ColorsController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_color, only: [:edit, :update, :destroy]

  def index
    @colors = Color.where(trash: false)
  end

  def new
    @color = Color.new
  end

  def create
    @color = Color.new(color_params)

    respond_to do |format|
      if @color.save
        format.html { redirect_to director_colors_path, notice: 'Color was successfully added.' }
        format.json { render :show, status: :created, location: @color }
      else
        format.html { render :new }
        format.json { render json: @color.errors, status: :unprocessable_entity }
      end
    end
  end

  def trash
    @colors = Color.trash_bin
    @menu = [
        {text: 'Add color', url: new_director_color_path, icon: 'pencil'},
        {text: "All (#{Color.where(trash:false).count})", url: director_colors_path, icon: 'trash'}
    ]
  end

  def destroy
    @color.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_colors_path, notice: 'Color was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @color.update(color_params)
        format.html { redirect_to director_colors_path, notice: 'Color was successfully updated.' }
        format.json { render :show, status: :ok, location: @color }
      else
        format.html { render :edit }
        format.json { render json: @color.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_title
    @title = 'Colors'
    @current_menu = 'colors'
  end

  def set_color
    @color = Color.where(id: params[:id]).first
  end

  def color_params
    params.require(:color).permit(:name, :trash, :hex_code)
  end

  def set_menu
    trash_count = Color.trash_bin.count
    @menu = [
        {text: 'Add color', url: new_director_color_path, icon: 'pencil'},
        {text: "Trash (#{trash_count})", url: director_colors_trash_path, icon: 'trash'}
    ]
  end
end
