institueName = "Odinschool Instituition";
console.log(institueName);

var institueName = "Odinschool"; // ES6 => Ecma Script 6th Edition => let and const

const presentYear = 2023;
// If we declare any variable with `const`, We stricty not allowed to re-assign;
// presentYear = 2024; // Will throw Error
let presentMonth = "August";

presentMonth = "September";

console.log(presentMonth);

// Declaration => Declaring a variable; Ex: var a;
// Assigninment => Declaring a variable; Ex: a = 1;
// Re-Assigninment => Declaring a variable; Ex: a = 2;
// var b = 2; => Declaring with initial value

// Modification
const user = { fname: "Harindra", lname: "Masna" };
user.fname = "odinschool";
console.log(user);
delete user.lname;
console.log(user);
