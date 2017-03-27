class Director::SizesController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_size, only: [:show, :edit, :update, :destroy]

  # GET /sizes
  # GET /sizes.json
  def index
    @sizes = Size.all
  end

  # GET /sizes/1
  # GET /sizes/1.json
  def show
  end

  # GET /sizes/new
  def new
    @size = Size.new
    @title = "Add Size"
  end

  # GET /sizes/1/edit
  def edit
  end

  def trash
    @sizes = Size.trash_bin
    @menu = [
        {text: 'New size', url: new_director_size_path, icon: 'pencil'},
        {text: "All (#{Size.where(trash: false).count})", url: director_sizes_path, icon: 'expand'}
    ]
  end

  # POST /sizes
  # POST /sizes.json
  def create
    @size = Size.new(size_params)

    respond_to do |format|
      if @size.save
        format.html { redirect_to director_sizes_path, notice: 'Size was successfully created.' }
        format.json { render :show, status: :created, location: @size }
      else
        format.html { render :new }
        format.json { render json: @size.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sizes/1
  # PATCH/PUT /sizes/1.json
  def update
    respond_to do |format|
      if @size.update(size_params)
        format.html { redirect_to director_sizes_path, notice: 'Size was successfully updated.' }
        format.json { render :show, status: :ok, location: @size }
      else
        format.html { render :edit }
        format.json { render json: @size.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sizes/1
  # DELETE /sizes/1.json
  def destroy
    @size.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_sizes_path, notice: 'Size was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_size
      @size = Size.where(id: params[:id]).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def size_params
      params.require(:size).permit(:name, :description, :trash)
    end

    def set_title
      @title = 'Sizes'
    end

    def set_menu
      trash_count = Size.trash_bin.count
      @menu = [
          {text: 'New size', url: new_director_size_path, icon: 'pencil'},
          {text: "Trash (#{trash_count})", url: director_sizes_trash_path, icon: 'trash'}
      ]
    end
end
