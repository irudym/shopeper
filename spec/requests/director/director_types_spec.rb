require 'rails_helper'

RSpec.describe "Director::Types", type: :request do
  describe "GET /director_types" do
    it "works! (now write some real specs)" do
      get director_types_path
      expect(response).to have_http_status(200)
    end
  end
end
