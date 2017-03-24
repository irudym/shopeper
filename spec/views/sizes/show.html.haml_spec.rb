require 'rails_helper'

RSpec.describe "sizes/show", type: :view do
  before(:each) do
    @size = assign(:size, Size.create!(
      :size => "Size",
      :description => "Description"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Size/)
    expect(rendered).to match(/Description/)
  end
end
