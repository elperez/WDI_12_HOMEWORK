console.log('ready loopy');

// The even/odd reporter
for (var num = 0; num <= 20; num++){
  if (num%2 === 0){
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

//Multiplication Tables
for (var num = 0; num <=10; num++){
  console.log(num + " * 9 = " + (num * 9));
}

//Your top choices
var topChoices = [
  ["blue", "1st"],
  ["green", "2nd"],
  ["black", "3rd"]
];

for (var choice = 0; choice < topChoices.length; choice++){
  console.log("My " + topChoices[choice][1] + " top choice is " + topChoices[choice][0] + ".");
}