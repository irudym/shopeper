require 'rails_helper'

RSpec.describe "director/types/edit", type: :view do
  before(:each) do
    @director_type = assign(:director_type, Director::Type.create!())
  end

  it "renders the edit director_type form" do
    render

    assert_select "form[action=?][method=?]", director_type_path(@director_type), "post" do
    end
  end
end
