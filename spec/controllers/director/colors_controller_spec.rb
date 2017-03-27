require 'rails_helper'

RSpec.describe Director::ColorsController, type: :controller do

  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "sets title" do
      get :index, params: {}, session: valid_session
      expect(assigns(:title)).to eq("Colors")
    end
  end

  describe "GET #trash" do
    xit "returns http success" do
      get :trash
      expect(response).to have_http_status(:success)
    end
  end

end
