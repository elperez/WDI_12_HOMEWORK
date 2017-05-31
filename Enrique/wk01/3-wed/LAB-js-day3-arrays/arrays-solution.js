console.log('ready loopy');

// ###1. Create an array of the days of the week
// - Create a variable named `days_of_the_week` as an array of the following:
//     - Monday
//     - Tuesday
//     - Wednesday
//     - Thursday
//     - Friday
//     - Saturday
//     - Sunday
var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday',
  'Saturday','Sunday'];

// ###2. My calendar says the first day is Sunday...
// - Remove Sunday from the last postion and move it to the first position.  Use array methods.
days_of_the_week.unshift(days_of_the_week.pop());

// ###3. Create a new array of the days of the week:
// - The first inner array should be the weekdays
// - The second inner array should be the weekend days
var new_days_of_the_week = [['Monday','Tuesday', 'Wednesday', 'Thursday','Friday'],
  ['Saturday', 'Sunday']];


// ###4. Remove either the weekdays or the weekends
// Removed weekends
new_days_of_the_week.splice(1,1);

// ###5. Sort the remaining days alphabetically
new_days_of_the_week[0].sort();

console.log(new_days_of_the_week);
