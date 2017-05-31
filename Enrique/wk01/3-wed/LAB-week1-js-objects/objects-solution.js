console.log('ready loopy');

// ## The Recipe Card
// Create an object to hold information on your favorite recipe. It should have
//properties for title (a string), servings (a number), and ingredients (an array of strings).
var recipe = {
  title: "Simplest Beef Stew",
  servings: 6,
  ingredients: [
    "1 can peeled tomato",
    "1 onion",
    "2 carrots",
    "2 lbs chuck beef",
    "1 cup beef stock"
  ]
}

// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa

console.log("- " +recipe.title);
console.log("- Serves: " + recipe.servings);
console.log(getIngredients());

function getIngredients() {
  var ingredients = "- Ingredients: \n";
  for (var index = 0; index < recipe.ingredients.length; index++){
    ingredients += "- " + recipe.ingredients[index] + "\n";
  }
  return ingredients;
}

// ## The Reading List
// Create an array of objects, where each object describes a book and has
// properties for the title (a string), author (a string), and alreadyRead (a
// boolean indicating if you read it yet).
var readingList = [];
readingList.push({
  title: "Christmas Train",
  author: "David Baldacci",
  alreadyRead: false
  },{
  title: "Scions of Shanarra",
  author: "Terry Brooks",
  alreadyRead: true
  },{
  title: "Lord of the Rings",
  author: "J.R.R. Tolkien",
  alreadyRead: true}
);

// Iterate through the array of books. For each book, log the book title and
// book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you
//read it yet or not. If you read it, log a string like 'You already read "The Hobbit"
//by J.R.R. Tolkien', and if not, log a string like 'You still need to read
//"The Lord of the Rings" by J.R.R. Tolkien.'
for (var index = 0; index < readingList.length; index++){
  if (readingList[index].alreadyRead){
    console.log('You already read the "' + readingList[index].title +
    '" by ' + readingList[index].author)
  } else {
    console.log('You still need to read the "' + readingList[index].title +
    '" by ' + readingList[index].author)
  }

}
