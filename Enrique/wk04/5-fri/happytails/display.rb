require 'pry'

class Display

  def initialize
  end

  def showMenu
    puts "  ==========================================================
  HappyTails Application
  Enter operation (or the operation number):
   [1] DISPLAY ANIMALS
   [2] DISPLAY CLIENTS
   [3] CREATE ANIMAL
   [4] CREATE CLIENTS
   [5] ADOPT ANIMAL
   [6] PUT ANIMAL FOR ADOPTION
   [7] QUIT
  =========================================================="
  end
  
  def getInput
    gets.chomp
  end

  def showInformation(information)
    puts information
  end
  def showResult(result)
    puts "Operation result: " + result
  end
  def showStatus(status)
    puts status
  end

  def promptForAnimalDetails
    info = {}
    puts "Enter name:\n"
    info[:name] = gets.chomp
    puts "Enter age:\n"
    info[:age] = gets.chomp
    puts "Enter gender:\n"
    info[:gender] = gets.chomp
    puts "Enter species:\n"
    info[:species] = gets.chomp
    puts "Enter toys:\n"
    info[:toys] = gets.chomp.split(",")
    info
  end

  def promptForClientDetails
    info = {}
    puts "Enter name:\n"
    info[:name] = gets.chomp
    puts "Enter age:\n"
    info[:age] = gets.chomp
    puts "Enter children number:\n"
    info[:childNumber] = gets.chomp
    info
  end

  def promptForAdoptionDetails
    info = {}
    puts "Enter client name:\n"
    info[:clientName] = gets.chomp
    puts "Enter animal name:\n"
    info[:animalName] = gets.chomp
    puts "Enter species:\n"
    info[:species] = gets.chomp
    info
  end

  def promptForUnAdoptionDetails
    info = {}
    puts "Enter client name:\n"
    info[:clientName] = gets.chomp.to_s
    puts "Enter animal name:\n"
    info[:animalName] = gets.chomp.to_s
    info
  end
end