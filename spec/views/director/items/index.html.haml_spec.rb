require 'rails_helper'


=begin
 RSpec.describe "malls/index", type: :view do
  before(:each) do
    assign(:malls, [
        Mall.create!(
            :name => "Name",
            :address => "Address"
        ),
        Mall.create!(
            :name => "Name",
            :address => "Address"
        )
    ])
  end

  it "renders a list of malls" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Address".to_s, :count => 2
  end
end
=end