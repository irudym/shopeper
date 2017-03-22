require 'rails_helper'

RSpec.describe "malls/new", type: :view do
  before(:each) do
    assign(:mall, Mall.new(
      :name => "MyString",
      :address => "MyString"
    ))
  end

  it "renders new mall form" do
    render

    assert_select "form[action=?][method=?]", malls_path, "post" do

      assert_select "input#mall_name[name=?]", "mall[name]"

      assert_select "input#mall_address[name=?]", "mall[address]"
    end
  end
end
