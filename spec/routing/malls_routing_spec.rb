require "rails_helper"

RSpec.describe MallsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/malls").to route_to("malls#index")
    end

    it "routes to #new" do
      expect(:get => "/malls/new").to route_to("malls#new")
    end

    it "routes to #show" do
      expect(:get => "/malls/1").to route_to("malls#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/malls/1/edit").to route_to("malls#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/malls").to route_to("malls#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/malls/1").to route_to("malls#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/malls/1").to route_to("malls#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/malls/1").to route_to("malls#destroy", :id => "1")
    end

  end
end
