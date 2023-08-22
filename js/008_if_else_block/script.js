// Syntax
// if (condition1) {
//   // Executes if condition is `true`
// } else if(condition2) {
//   // execute if the condition1 is `false` and condition2 is `true`
// } else {
//    // execute if the condition2 is `false`
// }

var condition1 = 2 > 1; // true => !true --> false
if (condition1) {
  console.log("2 > 1 is truthy");
} else {
  console.log("2 > 1 is falsey");
}

var condition2 = 1 > 2; //  false
if (condition2) {
  console.log("1 > 2 is truthy");
} else {
  console.log("1 > 2 is falsey");
}

if (condition2) {
  console.log("1 > 2 is truthy");
} else if (condition1) {
  console.log("2 > 1 is truthy");
} else {
  console.log("2 > 1 is falsey");
}

//  Implementing terinary operation
//  Syntax
//  condition ? execute if true : execute if false;
console.log(condition2 ? "1 > 2 is truthy" : condition1 ? "2 > 1 is truthy" : "2 > 1 is falsey");
