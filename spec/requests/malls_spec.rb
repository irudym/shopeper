require 'rails_helper'

RSpec.describe "Malls", type: :request do
  describe "GET /malls" do
    it "works! (now write some real specs)" do
      get malls_path
      expect(response).to have_http_status(200)
    end
  end
end
