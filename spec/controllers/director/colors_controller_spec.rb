require 'rails_helper'

RSpec.describe Director::ColorsController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #trash" do
    xit "returns http success" do
      get :trash
      expect(response).to have_http_status(:success)
    end
  end

end
