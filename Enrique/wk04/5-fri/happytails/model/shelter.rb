require_relative 'animal.rb'
require_relative 'client.rb'

require 'pry'


class Shelter

  attr_accessor :clientList, :animalList

  def initialize()
    @animalList = []
    @clientList = []
  end

  def getAllClientInfoList
    summary = "CLIENT INFORMATION LIST:\n"
    summary.concat("Total clients: #{@clientList.length}\n")
    @clientList.each_with_index do | client , i| 
      summary.concat("#{i+1}. ")
      summary.concat(client.getInfo)
    end
    summary
  end

  def getAllAnimalInfoList
    summary = "ANIMAL INFORMATION LIST:\n"
    summary.concat("Total animals: #{@animalList.length}\n")
    @animalList.each_with_index do | animal , i| 
      summary.concat("#{i+1}. ")
      summary.concat(animal.getInfo)
    end
    summary
  end

  def addAnimal(name, age, gender, species, toy)
    newAnimal = Animal.new(name, age, gender, species, toy)
    @animalList.unshift(newAnimal)
  end

  def addClient(name, childrenNumber, age)
    @clientList.unshift(Client.new(name, childrenNumber, age))
  end


  def processAdoption(clientName, animalName, species)
    
    animalResult = @animalList.find {| animal|
      animal.name == animalName
      animal.species == species}
    clientResult = @clientList.find { |client|
      client.name == clientName}

    if (animalResult != nil && clientResult != nil)
      clientResult.petList.unshift(animalResult)
      result = "adoption successful"
    elsif animalResult == nil
      result = "unable to find the animal"
    elsif clientResult == nil
      result = "unable to find the client"
    end
    result
  end

  def processUnAdoption(clientName, animalName)
    animalResult = @animalList.find {| animal|
      animal.name == animalName}
    clientResult = @clientList.find { |client|
      client.name == clientName}
    puts "processForAdoption"

    if (clientResult != nil && animalResult != nil)
      clientResult.petList.delete_if {|pet| pet.name == animalName}
      # animalResult = clientResult.petList.find{| animal|
      # animal.name == animalName}
      # clientResult.petList.shift(animalResult)
      animalResult.owner = ""
      result = "animal is now back for adoption"
    elsif animalResult == nil
      result = "unable to find the animal"
    elsif clientResult == nil
      result = "unable to find the client"
    end
  end


end