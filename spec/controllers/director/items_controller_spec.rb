require 'rails_helper'

RSpec.describe Director::ItemsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new" do
    it "return http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #trash" do
    xit "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

end
