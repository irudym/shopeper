require 'rails_helper'

describe 'Create New Item template', type: :view do

  before(:each) do
    shop = Shop.new()
    assign(:item, Item.new(
        :name => "Test item",
        :description => "Description",
        :shop => shop
    ))
  end

  it "renders new item form" do
    render

    assert_select "form[action=?][method=?]", items_path, "post" do
      assert_select "input#item_name[name=?]", "item[name]"
      assert_select "input#item_description[name=?]", "item[description]"
    end
  end

  it 'provides a way to add at least three pictures' do
    assert_select '.pictures' do
      assert_select '.panel', 3
    end
  end

end