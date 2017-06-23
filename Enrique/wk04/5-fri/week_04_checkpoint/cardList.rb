require 'pry'

class PokemonCardList

  attr_accessor :cardList

  def initialize
    @cardPile1 = {}
    @cardList = {
      :Pikachu => { :attack => 40 },
      :Pidgeot => { :attack => 60 },
      :Alakazam => { :attack => 80},
      :Butterfree => { :attack => 30},
      :Gengar => { :attack => 70},
      :Moltres => { :attack => 100},
      :Vulpix => { :attack => 40},
      :Blastoise => { :attack => 80},
      :Hitmonchan => { :attack => 50}
    }
  end
end

pokemon = PokemonCardList.new()
# reverse list
cardArray = pokemon.cardList.keys.reverse
# pokemon.cardPile1[] =

binding.pry