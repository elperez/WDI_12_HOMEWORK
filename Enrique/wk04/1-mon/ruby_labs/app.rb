# puts('hello world')

#create diretories for each first name only lowercased
# for each directory inside create a new file named README.md

#intro
# |
# |---john
# |      | ---README.md
# |---mary
# |---bits


require 'pry' 
require 'fileutils' # look up function in this library

hackers = ['john smith', 'mary jane', 'Bits Please']
hackers.each do |hacker| 
    dir_name = hacker.split.first.downcase
    FileUtils.mkdir(dir_name)
    FileUtils.cd(dire_name)
    FileUtils.touch('README.MD')
    FileUtils.cd '..'
end

# .each that you can call on an array

# allows to pause program
#binding.pry