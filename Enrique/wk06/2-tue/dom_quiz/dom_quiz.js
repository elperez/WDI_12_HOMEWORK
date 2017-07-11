// (1.) Write the correct javascript to select the second h1 element:

var $h1 = $('h1')[1];
var h1 = document.getElementsByTagName('h1')[1];

// (2.) How would you change the contents of the element
//to be 'Friend'?
h1.textContent = "friend";
//
// ```html
// <html>
//   <div>
//     <h1>Hello</h1>
//   </div>
//
//   <ul>
//     <h1>Goodbye<h1>
//   </ul>
// </html>
// ```
//
// (3.) How would you add an event listener to the button element inside the div,
//so that when it is clicked the background colour of the div changes to red?
div = document.getElementsByTagName('div');
insideDivButton = document.getElementsByTagName('button')[0];
insideDivButton.addEventListener('click', function(event) {
  document.getElementsByTagName('div')[0].style.backgroundColor = "red";
});


// ```html
// <html>
//   <div>
//     <button>Click me!</button>
//   </div>
//
//   <button>Dont click me</button>
// </html>
// ```
//
// (4.) Store the contents of the input box element with id 'favCol' into a variable called 'favouriteColor'.
var favouriteColor = document.getElementById('favCol').value
// ```html
// <html>
//   <input type="text" id="favCol"/>
//   <input type="text" id="leastFavCol"/>
//   <input type="text" id="favFood"/>
// </html>
// ```
//
// (5.) Append a paragraph tag to the div with class 'my-articles'.
var newParagraph = document.createElement('p');
newParagraph.textContent = "new paragraph";
document.querySelector('.my-articles').appendChild(newParagraph);
// ```html
// <html>
  // <body>
  // <input type="text" id="search"/>
  //
  // <div class="my-articles">
  //
  // </div>
  // </body>
//
// </html>
// ```
//
// (6.) Write the necessary code to figure out how many list items are in the ul tag below:
var listLength = document.getElementsByTagName('li').length
// ```html
// <html>
  // <body>
  // <input type="text" id="search"/>
  //
  // <ul>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  //   <li></li>
  // </ul>
  // </body>
//
// </html>
// ```
//
// (7.) Write the neccessary code so when the button is clicked a new list
//item with a random number is appended to the unordered list with the class 'lucky-numbers'

var drawNumberButton = document.getElementsByTagName('button')[0];
drawNumberButton.addEventListener('click', function(event) {
  var newListItem = document.createElement('li');
  var randomNumber = Math.floor((Math.random() * 10) + 1);
  newListItem.textContent = randomNumber.toString();
  document.querySelector('.lucky-numbers').appendChild(newListItem);
});


// ```html
// <html>
//   <body>
// <button>draw number</button>
// <ul class="lucky-numbers">
//   <li>7</li>
//   <li>12</li>
//   <li>45</li>
// </ul>
//   </body>
//
// </html>
// ```
