require 'pry'

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