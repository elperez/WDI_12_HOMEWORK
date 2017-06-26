require 'pry'


# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.

class Animal

  attr_accessor :name, :toy, :owner, :species

  def initialize(inputName, age, gender, species, toys)
    @name = inputName
    @age = age
    @gender = gender
    @species = species
    @toy = toys
    @owner = ""
  end

  def getInfo
    animalInfo = ""
    animalInfo.concat("Name: #{@name}\n")
    animalInfo.concat("  age: #{@age}\n")
    animalInfo.concat("  gender: #{@gender}\n")
    animalInfo.concat("  species: #{@species}\n")
    animalInfo.concat("  toys: #{@toys}\n")
    animalInfo.concat("  owner: #{@owner}\n")
    animalInfo
  end
end