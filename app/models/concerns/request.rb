class Request

  def self.to_request(string, colors, types, brands, sizes, malls)
    string.split(' ').inject({}) do |acc, word|
      if(word != ' ')
        color = Words.new(word).get_closest(colors)
        type = Words.new(word).get_closest(types)
        brand = Words.new(word).get_closest(brands)
        size = Words.new(word).get_closest(sizes)
        mall = Words.new(word).get_closest( malls)
        res = [color, type, brand, size, mall].min do |a, b|
          a[:distance] <=> b[:distance]
        end

        if res.eql?(color)
          acc.merge!({color: color[:word]})
        end
        if res.eql?(type)
          acc.merge!({type: type[:word]})
        end
        if res.eql?(brand)
          acc.merge!({brand: brand[:word]})
        end
        if res.eql?(size)
          acc.merge!({size: size[:word]})
        end
        if res.eql?(mall)
          acc.merge!({mall: mall[:word]})
        end
        acc
      end
    end
  end

end