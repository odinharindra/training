console.log("Script is added properly");

// ======================== String Concatination ====================
var string1 = "Harindra";
var string2 = "Masna";
var fullName = string1 + " " + string2;
var fullName2 = `My full name is ${string1} ${string2}`; // Template

console.log({ fullName, fullName2 });

// ======================= Mathematical Calculation =================

// Addition
var num1 = 10;
var num2 = 5;
var addition = num1 + num2;
console.log({ addition });

var num1 = "10";
var num2 = 5;
var num3 = 20;
const addition1 = num1 + num2 + num3; // Automatically treat like concatination
const addition2 = num3 + num2 + num1;
console.log({ addition1, addition2 });

// Substraction
var Num1 = 10;
var Num2 = 5;
var substraction1 = Num1 - Num2;
var substraction2 = Num2 - Num1;
console.log({ substraction1, substraction2 });

var Num1 = "10";
var Num2 = 5;
var substraction1 = Num1 - Num2; // Default type conversion happens for `Num1`
var substraction2 = Num2 - Num1;
console.log({ substraction1, substraction2 });

// Division
var _num1 = 5;
var _num2 = 12;
var division = _num2 / _num1;

console.log({ division });

// Reminder
var _num1 = 5;
var _num2 = 12;
var reminder = _num2 % _num1;

console.log({ reminder });

// Multiplication
var _num1 = 5;
var _num2 = 10;
var multiplication = _num2 * _num1;

console.log({ multiplication });

// Type conversion
var type1 = "10";
var type2 = 10;

// Coverting `type1` from string to Number;
type1 = Number(type1); // Method 1
type1 = +type1; // Method 2

console.log({ type1 }, typeof type1);

// Coverting `type2` from Number to String;
type2 = String(type2);
console.log({ type2 }, typeof type2);

// Challenge?

// var num = '3';
// var num2 = '2';

// console.log(+num + +num2);
// +num2 => 2
// console.log(num + 2);
// console.log('3' + 2);

// Type checking
console.log("2" == 2); // returns `true` => Type conversion happens by default to compare the values
console.log("2" === "2"); // returns `false` => Also check for type equality along with value
console.log("2" == true); // return `false` => '2' --> 2 | true --> 1 | Answer: 2 ≠ 1

console.log({ a: 1 } == { a: 1 }); // return `false` => Because comparing two object always returns falsedue to non-primitive data types

console.log(2 * 5 + 7 / 12); // Follows the BODMAS
console.log(2 * (Math.pow(5 + 7, 2) / 12)); // Follows the BODMAS

// ^ => XOR
