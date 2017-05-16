class Words

  def initialize(word)
    @word = word
  end

  def distance(to_word)
    Words.levenshtein_distance(@word, to_word)
  end

  def get_closest(words)
    result=''
    dst = 1000
    words.each do |w|
      if distance(w) < dst
        dst = distance(w)
        result = w
      end
    end
    {word: result, distance: dst}
  end


  def self.levenshtein_distance(str1, str2)
    n = str1.length
    m = str2.length
    max = n/2

    return m if 0 == n
    return n if 0 == m
    return n if (n - m).abs > max

    d = (0..m).to_a
    x = nil

    str1.each_char.with_index do |char1,i|
      e = i+1

      str2.each_char.with_index do |char2,j|
        cost = (char1 == char2) ? 0 : 1
        x = [ d[j+1] + 1, # insertion
              e + 1,      # deletion
              d[j] + cost # substitution
        ].min
        d[j] = e
        e = x
      end

      d[m] = x
    end
    x
  end
end


def to_request(string, colors, types, brands, sizes, malls)
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



colors = %w(красный зеленый синий голубой черный бирюзовый)
test_word = Words.new('красная')

puts "Distance between Красная"
colors.each do |word|
  puts "==> #{word} ::#{test_word.distance(word)}"
end

string = "Где найти красные слипоны от adidasa размера L в афимолле?"
types = %w(слипоны штаны ботинки трусы)
brands = %w(adidas lacoste дишман)
sizes = %w(34 35 36 37 38 39 40 41 M L XL XXL)
malls = %w(афимол хц ереван-плаза)
puts "create request: #{string}"
req = to_request(string, colors, types, brands, sizes, malls)
puts "==> request{type: #{req[:type]},
  color: #{req[:color]},
  brand: #{req[:brand]},
  size: #{req[:size]},
  mall: #{req[:mall]}}"
