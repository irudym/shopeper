class Director::MallsController < DirectorController
  before_action :set_mall, only: [:show, :edit, :update, :destroy]
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_title

  # GET /malls
  # GET /malls.json
  def index
    @malls = Mall.where(trash: false)
  end

  # GET /malls/1
  # GET /malls/1.json
  def show
  end

  # GET /malls/new
  def new
    @mall = Mall.new
    @shops = Shop.to_options.to_json
  end

  # GET /malls/1/edit
  def edit
    @shops = Shop.to_options.to_json
    @shops_in_mall = @mall.shops.to_options.to_json
  end

  def trash
    @malls = Mall.where(trash: true)
    @menu = [
        {text: 'New mall', url: new_director_mall_path, icon: 'pencil'},
        {text: "All (#{Mall.where(trash: false).count})", url: director_malls_path, icon: 'tag'}
    ]
  end

  # POST /malls
  # POST /malls.json
  def create
    @mall = Mall.new(mall_params)
    shops_in_mall = Shop.where(id: JSON.parse(params[:mall][:shops_in_mall])) if params[:mall][:shops_in_mall]
    @mall.shops << shops_in_mall

    respond_to do |format|
      if @mall.save
        format.html { redirect_to director_malls_path, notice: 'Mall was successfully created.' }
        format.json { render :show, status: :created, location: @mall }
      else
        format.html {
          @shops = Shop.to_options.to_json
          render :new
        }
        format.json { render json: @mall.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /malls/1
  # PATCH/PUT /malls/1.json
  def update
    respond_to do |format|
      if @mall.update(mall_params)
        format.html { redirect_to director_malls_path, notice: 'Mall was successfully updated.' }
        format.json { render :show, status: :ok, location: @mall }
      else
        format.html { render :edit }
        format.json { render json: @mall.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /malls/1
  # DELETE /malls/1.json
  def destroy
    @mall.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_malls_path, notice: 'Mall was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mall
      @mall = Mall.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mall_params
      params.require(:mall).permit(:name, :address, :description, :picture, :trash)
    end

    def set_title
      @title = 'Malls'
      @current_menu = 'malls'
    end

    def set_menu
      trash_count = Mall.trash_bin.count
      @menu = [
          {text: 'Add mall', url: new_director_mall_path, icon: 'plus'},
          {text: "Trash (#{trash_count})", url: director_malls_trash_path, icon: 'trash'}
      ]
    end
end
