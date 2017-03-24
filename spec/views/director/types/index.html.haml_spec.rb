require 'rails_helper'

RSpec.describe "director/types/index", type: :view do
  before(:each) do
    assign(:director_types, [
      Director::Type.create!(),
      Director::Type.create!()
    ])
  end

  it "renders a list of director/types" do
    render
  end
end
