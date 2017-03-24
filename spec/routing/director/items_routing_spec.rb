require 'rails_helper'

RSpec.describe Director::ItemsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/director/items").to route_to("director/items#index")
    end

    it "routes to #new" do
      expect(:get => "/director/items/new").to route_to("director/items#new")
    end

    it "routes to #show" do
      expect(:get => "/director/items/1").to route_to("director/items#show", :id => "1")
    end

    it "routes to #trash" do
      expect(:get => "/director/items/trash").to route_to("director/items#trash")
    end

    it "routes to #edit" do
      expect(:get => "/director/items/1/edit").to route_to("director/items#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/director/items").to route_to("director/items#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/director/items/1").to route_to("director/items#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/director/items/1").to route_to("director/items#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/director/items/1").to route_to("director/items#destroy", :id => "1")
    end

  end
end