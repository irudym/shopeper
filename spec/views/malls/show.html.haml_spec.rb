require 'rails_helper'

RSpec.describe "malls/show", type: :view do
  before(:each) do
    @mall = assign(:mall, Mall.create!(
      :name => "Name",
      :address => "Address"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Address/)
  end
end
