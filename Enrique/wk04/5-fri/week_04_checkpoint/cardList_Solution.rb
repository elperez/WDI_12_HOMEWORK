require 'pry'

class PokemonCardList

  attr_accessor :cardList

  def initialize
    @cardPile1 = {}
    @cardList = {
      {name : 'Pikachu', attack : 40 },
      {name : 'Pidgeot', attack : 60 }
    }
  end
end

pokemon = PokemonCardList.new()
groups = pokemon.cardList.each_slice(1).to_a
players = {alfred: groups.shift(), peter: groups.shift()}
cardArray = pokemon.cardList.keys.reverse
# pokemon.cardPile1[] =

binding.pry