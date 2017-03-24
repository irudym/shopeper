require 'rails_helper'

RSpec.describe "director/types/show", type: :view do
  before(:each) do
    @director_type = assign(:director_type, Director::Type.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
