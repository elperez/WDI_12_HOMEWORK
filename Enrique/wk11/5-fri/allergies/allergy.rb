require 'pry'

class Allergies

  attr_accessor :allergens, :allergens_array, :allergic_to

  def initialize(input_number)
    @input = input_number
    @allergens = {
      "eggs" => 1,
      "peanuts" => 2,
      "shellfish" => 4,
      "strawberries" => 8,
      "tomatoes" => 16,
      "chocolate" => 32,
      "pollen" => 64,
      "cats" => 128,
    }
    @allergens_array = allergens.to_a.reverse
    @allergic_to = []
    get_allergic_to
  end

  def list
    @allergens.keys
  end

  def allergic_to?(allergen)
    @allergic_to.include?(allergen)   #=> "b"
  end

  def get_allergic_to
    # binding.pry
    allergens_array.each do |allergen|
      # binding.pry
      if (allergen[1] <= @input &&
        (@input - allergen[1]) >= 0)
        # binding.pry
        @allergic_to.push(allergen[0])
        @input = @input - allergen[1]
      end
    end
  end
end


allergies = Allergies.new(34)
allergies.list()
binding.pry
# => ['peanuts', 'chocolate']
allergies.allergic_to?('chocolate')
# => true
allergies.allergic_to?('cats')
# => false
