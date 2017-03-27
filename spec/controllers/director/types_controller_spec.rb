require 'rails_helper'

RSpec.describe Director::TypesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Director::Type. As you add validations to Director::Type, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    picture = create(:picture)
    {
        name: 'test',
        picture: picture
    }
  }

  let(:invalid_attributes) {
    {
      name: 'test'
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # Director::TypesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "sets title" do
      get :index, params: {}, session: valid_session
      expect(assigns(:title)).to eq("Types")
    end

    it "assigns all types as @types" do
      type = Type.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(assigns(:types)).to eq([type])
    end
  end

  describe "GET #new" do
    it "assigns a new type as @type" do
      get :new, params: {}, session: valid_session
      expect(assigns(:type)).to be_a_new(Type)
    end
  end

  describe "GET #edit" do
    it "assigns the requested type as @type" do
      type = Type.create! valid_attributes
      get :edit, params: {id: type.to_param}, session: valid_session
      expect(assigns(:type)).to eq(type)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Type" do
        expect {
          post :create, params: {type: valid_attributes}, session: valid_session
        }.to change(Type, :count).by(1)
      end

      it "assigns a newly created type as @type" do
        post :create, params: {type: valid_attributes}, session: valid_session
        expect(assigns(:type)).to be_a(Type)
        expect(assigns(:type)).to be_persisted
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved type as @type" do
        post :create, params: {type: invalid_attributes}, session: valid_session
        expect(assigns(:type)).to be_a_new(Type)
      end

      it "re-renders the 'new' template" do
        post :create, params: {director_type: invalid_attributes}, session: valid_session
        expect(response).to render_template("new")
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested director_type" do
        type = Director::Type.create! valid_attributes
        put :update, params: {id: type.to_param, director_type: new_attributes}, session: valid_session
        type.reload
        skip("Add assertions for updated state")
      end

      it "assigns the requested director_type as @director_type" do
        type = Director::Type.create! valid_attributes
        put :update, params: {id: type.to_param, director_type: valid_attributes}, session: valid_session
        expect(assigns(:director_type)).to eq(type)
      end

      it "redirects to the director_type" do
        type = Director::Type.create! valid_attributes
        put :update, params: {id: type.to_param, director_type: valid_attributes}, session: valid_session
        expect(response).to redirect_to(type)
      end
    end

    context "with invalid params" do
      it "assigns the director_type as @director_type" do
        type = Director::Type.create! valid_attributes
        put :update, params: {id: type.to_param, director_type: invalid_attributes}, session: valid_session
        expect(assigns(:director_type)).to eq(type)
      end

      it "re-renders the 'edit' template" do
        type = Director::Type.create! valid_attributes
        put :update, params: {id: type.to_param, director_type: invalid_attributes}, session: valid_session
        expect(response).to render_template("edit")
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested director_type" do
      type = Director::Type.create! valid_attributes
      expect {
        delete :destroy, params: {id: type.to_param}, session: valid_session
      }.to change(Director::Type, :count).by(-1)
    end

    it "redirects to the director_types list" do
      type = Director::Type.create! valid_attributes
      delete :destroy, params: {id: type.to_param}, session: valid_session
      expect(response).to redirect_to(director_types_url)
    end
  end

end
