class SearchController < ApplicationController
  respond_to :json

  def index
    @request = params[:q]
    @results = ''
    if @request
      colors = Color.to_names
      types = Type.to_names
      brands = Brand.to_names
      sizes = Size.to_names
      malls = Mall.to_names

      request_params = Request.to_request(@request, colors, types, brands, sizes, malls)

      # find items
      request_string = create_item_request(request_params)
      @items = Item.where request_string

      request_string = create_item_in_shop_request(@items, request_params)
      items_in_shop = ItemInShop.where request_string

      @results = items_in_shop.inject([]) do |acc, item|
        acc << {item: item.item.name, color: item.color.name, size: item.size.name,
                shop: item.shop_in_mall.shop.name, mall: item.shop_in_mall.mall.name,
                picture: item.item.pictures}
      end

      # puts "Res:#{@results.to_json}"
    end
  end

  private

  def create_item_in_shop_request(items, request_string)
    request = {item: items}

    if request_string[:color]
      color = Color.where(name: request_string[:color], trash: false)
      request.merge!({color: color})
    end
    if request_string[:size]
      size = Size.where(name: request_string[:size], trash: false)
      request.merge!({size: size})
    end
    request.merge!({trash: false})
  end

  def create_item_request(request_string)
    request = Hash.new {}
    if request_string[:brand]
      brand = Brand.where(name: request_string[:brand], trash: false)
      request.merge!({brand: brand})
    end
    if request_string[:type]
      type = Type.where(name: request_string[:type], trash: false)
      request.merge!({type: type})
    end
    request.merge ({trash: false})
  end

end
