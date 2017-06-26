require 'pry'
# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.
class Client

  attr_accessor :name, :petList

  def initialize(name, age, childrenNumber)
    @name = name
    @childrenNumber = childrenNumber
    @age = age
    @petList = []
  end

  def getInfo
    clientInfo = ""
    clientInfo.concat("Name: #{@name}\n")
    clientInfo.concat("  number of children: #{@childrenNumber}\n")
    clientInfo.concat("  age: #{@age}\n")
    clientInfo.concat("  pet list: #{@petList}\n")
    clientInfo
  end
end