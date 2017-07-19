class Article < ApplicationRecord
  belongs_to :category


  # {
  #   'money': 2,
  #   'family': 1
  # }
  def process_article()
    file = File.new("stop-word-list.csv", "r")
    stopwords = ""
    line = file.gets
    stop_words = line.split(", ")
    file.close

    words = self.content.split(' ')

    histogram = {}
    words.each do |word|
      if !stop_words.include? word
        if histogram[word] == nil
          histogram[word] = 1
        else
          histogram[word] += 1
        end
      end
    end
    histogram
  end


end
