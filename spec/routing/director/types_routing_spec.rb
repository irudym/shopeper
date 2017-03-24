require "rails_helper"

RSpec.describe Director::TypesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/director/types").to route_to("director/types#index")
    end

    it "routes to #new" do
      expect(:get => "/director/types/new").to route_to("director/types#new")
    end

    it "routes to #show" do
      expect(:get => "/director/types/1").to route_to("director/types#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/director/types/1/edit").to route_to("director/types#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/director/types").to route_to("director/types#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/director/types/1").to route_to("director/types#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/director/types/1").to route_to("director/types#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/director/types/1").to route_to("director/types#destroy", :id => "1")
    end

  end
end
