require_relative 'model/shelter.rb'
require_relative 'display.rb'

require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# # HappiTails

# ### Objectives:
# - Practice creating objects

# - You are the manager at HappiTails animal shelter. You need to manage your
# shelter by storing and manipulating information about clients and animals.

# ### Specification:
# ##### Object Specs:
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.

# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.

# - Shelter:
#   - The shelter should display all the clients.
#   - The shelter should display all the animals.

# - Relationships:
#   - A client should be able to adopt an animal.
#   - A client should be able to put an animal up for adoption

# ##### Phase 1
# - Can create animals and clients

# ##### Phase 2
# - New animals and clients can be added to the shelter

# ##### Phase 3
# - When creating an animal or client, the user is prompted for information like names, gender etc.

# ##### Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
# - After selecting from the menu the task the user is prompted through the entire process

class HappyTailsApp

  def initialize()
    @shelter = Shelter.new
    @display = Display.new
    populateAnimalList
    populateClientList
  end

  def run
    
    @display.showMenu
    userInput = @display.getInput.downcase
    while userInput != "7" || userInput != "quit"
      puts case userInput
        when "1", "display animals"
          info = @shelter.getAllAnimalInfoList
          @display.showInformation(info)
          @display.showMenu
        when "2", "display clients"
          info = @shelter.getAllClientInfoList
          @display.showInformation(info)
          @display.showMenu
        when "3", "create animal"
          info = @display.promptForAnimalDetails
          @shelter.addAnimal(info[:name], info[:age], info[:gender], 
            info[:species], info[:toys])
          @display.showMenu
        when "4", "create client"
          info = @display.promptForClientDetails
          @shelter.addClient(info[:name], info[:age], info[:childNumber])
          @display.showMenu
        when "5", "adopt animal"
          info = @display.promptForAdoptionDetails
          result = @shelter.processAdoption(info[:clientName], info[:animalName], 
            info[:species])
          @display.showMenu
          @display.showResult(result)
        when "6", "put animal for adoption"  
          info = @display.promptForUnAdoptionDetails
          result = @shelter.processUnAdoption(info[:clientName], info[:animalName])
          @display.showMenu
          @display.showResult(result)
        when "7", "quit"  
          @display.showStatus("exiting application...")
          exit
      end

      userInput = @display.getInput.downcase
    end
  end

  
  def populateAnimalList 
    @shelter.addAnimal("Garfield", 3, "Male", "Cat", ["ball","cookie"])
    @shelter.addAnimal("Simba", 5, "Male", "Lion", ["jelly", "ball"])    
    @shelter.addAnimal("Nemo", 4, "Male", "Fish", ["jelly"])
    @display.showStatus("populating animal list...")
  end

  def populateClientList
    @display.showStatus("populating client list...")
    @shelter.addClient("Miranda", 26, 1)
    @shelter.addClient("Carrie", 25, 0)
    @shelter.addClient("Samantha", 30, 0)
    @shelter.addClient("Charlote", 28, 1)
  end
end

HappyTailsApp.new.run