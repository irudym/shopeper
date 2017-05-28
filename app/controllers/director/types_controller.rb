class Director::TypesController < DirectorController
  before_action :set_title
  before_action :set_menu, only: [:index, :new, :create, :trash]
  before_action :set_type, only: [:show, :edit, :update, :destroy]

  # GET /director/types
  # GET /director/types.json
  def index
    @types = Type.where(trash: false)
  end

  # GET /director/types/1
  # GET /director/types/1.json
  def show
  end

  # GET /director/types/new
  def new
    @title = 'New Type'
    @type = Type.new
    @pictures = Picture.where(trash: false)
  end

  # GET /director/types/1/edit
  def edit
    @title = "Edit type"
  end

  def trash
    @types = Type.trash_bin
    @menu = [
        {text: 'New type', url: new_director_type_path, icon: 'pencil'},
        {text: "All (#{Type.where(trash: false).count})", url: director_types_path, icon: 'tag'}
    ]
  end

  # POST /director/types
  # POST /director/types.json
  def create
    image = {id: nil}
    if type_params[:image]
      image = Picture.create(name: type_params[:name], image: type_params[:image], description: "Image of #{type_params[:name]} type")
    else
      image = Picture.where(id: type_params[:image_id]).first if type_params[:image_id]
    end

    @type = Type.new(name: type_params[:name], description: type_params[:description], picture_id: image[:id])

    respond_to do |format|
      if @type.save
        format.html { redirect_to director_types_path, notice: 'Type was successfully created.' }
        format.json { render :show, status: :created, location: @type }
      else
        @pictures = Picture.where(trash: false)
        format.html { render :new }
        format.json { render json: @type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /director/types/1
  # PATCH/PUT /director/types/1.json
  def update
    respond_to do |format|
      if @type.update(type_params)
        format.html { redirect_to director_types_path, notice: 'Type was successfully updated.' }
        format.json { render :show, status: :ok, location: @director_type }
      else
        format.html { render :edit }
        format.json { render json: @type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /director/types/1
  # DELETE /director/types/1.json
  def destroy
    @type.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_types_path, notice: 'Type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_type
      puts "set_type: #{params[:id]}"
      @type = Type.where(id: params[:id]).first
      puts "set_type, find: #{@type.id}"
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def type_params
      params.require(:type).permit(:name, :image, :trash, :description, :image_id)
    end

    def set_title
      @title = 'Types'
      @current_menu = 'types'
    end

    def set_menu
      trash_count = Type.trash_bin.count
      @menu = [
          {text: 'New type', url: new_director_type_path, icon: 'pencil'},
          {text: "Trash (#{trash_count})", url: director_types_trash_path, icon: 'trash'}
      ]
    end
end
