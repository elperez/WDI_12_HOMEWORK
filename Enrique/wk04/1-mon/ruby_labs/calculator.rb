require 'pry'
# Calculator

### Explanation
# - You will be building a calculator.  A calculator can perform multiple 
# arithmetic operations.  Your function should allow the user to choose which 
# operation is expected, enter in the values to perform the operation on, and 
# ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

integer1 = 0
integer2 = 0

def displayMenu
   puts "Calculator
enter operation to perform:
- add
- subtract
- multiply
- divide"
end

def promptInput
   puts "Enter first integer." 
   integer1 = gets.chomp.to_i
   puts "Enter second integer." 
   integer2 = gets.chomp.to_i
   return [integer1,integer2]
end

def add
    inputs = promptInput
    return inputs[0] + inputs[1]
end

def subtract
    inputs = promptInput
    return inputs[0] - inputs[1]
end

displayMenu
operation = gets.chomp
while operation != "quit"

    binding.pry
    if operation == "add"
        puts "Result: " + add.to_s
        binding.pry
    elsif operation == "subtract"
        puts "Result: " + subtract.to_s
    end
    operation = gets.chomp
end



# ##### Phase 1
# - Calculator functionality
#   - Calculator should be able to do basic arithmetic (+,-, *, /)

# ##### Phase 2
# - Advanced Calculator functionality
#   - Calculator should be able to do basic arithmetic (exponents, square roots)

# ##### Phase 3
# - User should be given a menu of Calculator functionality
# - User should be able to choose intended functionality

# ### Optional Extensions
# - Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
binding.pry