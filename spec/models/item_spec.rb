require 'rails_helper'

RSpec.describe Item, type: :model do
  describe 'filed validation' do
    it 'fails without name and shop' do
      item = Item.new(description: 'test item')
      expect(item).to_not be_valid
    end

    it 'fails without shop' do
      item = Item.new(name: 'test', description: 'test')
      expect(item).to_not be_valid
    end

    it 'works with provided name and shop' do
      shop = Shop.new()
      item = Item.new(name: 'test', shop: shop)
      expect(item).to be_valid
    end

    end
end
