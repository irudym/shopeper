class Director::BugsController < DirectorController
  before_action :set_title
  before_action :set_bug, only: [:show, :destroy, :update]

  def index
    @bugs = Bug.to_list.to_json
    @trash_count = Bug.where(trash: true).count.to_json
    @token = current_user.authentication_token
  end

  def trash
    @bugs = Bug.where(trash: true)
    @menu = [
        {text: "All Bugs (#{Bug.where(trash:false).count})", url: director_bugs_path, icon: 'bug'}
    ]
  end

  def new
  end


  def edit
  end

  def show
  end

  def update
    respond_to do |format|
      if @bug.update(bug_params)
        format.html { redirect_to director_bugs_path, notice: 'Bug was successfully updated.' }
        format.json { render :show, status: :ok, location: @bug }
      else
        format.html { render :edit }
        format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  def add_comment
    @bug = Bug.where(id: params[:bug_id]).first
    @comment = Comment.create(text: params[:comment])
    @bug.comments << @comment if @comment
    respond_to do |format|
      format.json { render :show, location: director_bugs_path(@bug) }
    end
  end

  def create
    @bug = Bug.new(bug_params)
    respond_to do |format|
      if @bug.save
        format.html { redirect_to director_bugs_path, notice: 'Bug was successfully created.' }
        format.json { render :show, status: :created, location: @bug }
      else
        format.html { render :index }
        format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @bug.put_to_trash
    respond_to do |format|
      format.html { redirect_to director_bugs_trash_path, notice: 'Bug was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  private

  def set_title
    @title = 'Bugs'
    @current_menu = 'bugs'
  end

  def bug_params
    params.require(:bug).permit(:title, :description, :trash, :status, :picture)
  end

  def set_bug
    @bug = Bug.where(id: params[:id]).first
  end
end
