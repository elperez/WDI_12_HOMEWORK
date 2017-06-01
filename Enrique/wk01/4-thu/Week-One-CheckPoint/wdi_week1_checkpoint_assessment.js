console.log('ready loopy');

//Variables
var captain = "Jack";
var phrase = 'Oh ' + captain + ', my ' + captain + '!';

//Conditionals
var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts){
  console.log('SOS!');
}

//Data Structures - JS Arrays
var weekend = ['Saturday'];
weekend.push('Sunday');
weekend.splice(0, 0, 'Friday');

var day = weekend[weekend.indexOf('Saturday')];
weekend.splice(weekend.indexOf('Friday'),1);

//Data Structures
var brain = {
  energyLevel: 10
};

var energy = brain.energyLevel;
brain.dream = 'electric sheep';

//JS function
function getRectangleArea(length, width){
  return length * width;
}
var area = getRectangleArea(3,4);
