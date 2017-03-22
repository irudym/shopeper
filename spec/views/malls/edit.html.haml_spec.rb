require 'rails_helper'

RSpec.describe "malls/edit", type: :view do
  before(:each) do
    @mall = assign(:mall, Mall.create!(
      :name => "MyString",
      :address => "MyString"
    ))
  end

  it "renders the edit mall form" do
    render

    assert_select "form[action=?][method=?]", mall_path(@mall), "post" do

      assert_select "input#mall_name[name=?]", "mall[name]"

      assert_select "input#mall_address[name=?]", "mall[address]"
    end
  end
end
