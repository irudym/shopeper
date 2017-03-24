require 'rails_helper'

RSpec.describe "sizes/index", type: :view do
  before(:each) do
    assign(:sizes, [
      Size.create!(
        :size => "Size",
        :description => "Description"
      ),
      Size.create!(
        :size => "Size",
        :description => "Description"
      )
    ])
  end

  it "renders a list of sizes" do
    render
    assert_select "tr>td", :text => "Size".to_s, :count => 2
    assert_select "tr>td", :text => "Description".to_s, :count => 2
  end
end
