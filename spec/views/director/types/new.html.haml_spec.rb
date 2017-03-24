require 'rails_helper'

RSpec.describe "director/types/new", type: :view do
  before(:each) do
    assign(:director_type, Director::Type.new())
  end

  it "renders new director_type form" do
    render

    assert_select "form[action=?][method=?]", director_types_path, "post" do
    end
  end
end
