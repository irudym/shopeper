require 'rails_helper'

RSpec.describe Type, type: :model do
  it  'converts entered name to downcase before saving' do
    item = Type.new(name: 'TESt')
    expect(item.name).to eq('test')
  end
end
