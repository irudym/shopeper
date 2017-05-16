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