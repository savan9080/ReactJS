import {p} from "./person.js";

// function test_var_let() {
//   let conditionVar = false;
//   if (conditionVar) {
//     var scopeVar = "hello";
//     let scopeLet = "Hello by let";
//   } else {
//     var scopeVar = "Hello by Var";
//     let scopeLet = "Hello by let";
//     const constVar = "This is const";
//     {
//       console.log(scopeLet);
//     }
//   }
//   console.log(scopeVar);
//   // console.log(constVar);
// }
// // test_var_let();

// let myName = (name) => {
//   console.log("My Name is:" + name);
// };
// myName("Savan");

// myName = (name) => {
//   console.log("My last name is:" + name);
// };
// myName("Patel");

// let multiply = (number1, number2) => {
//   return number1 * number2;
// };

// console.log(multiply(10, 20));

// let isAdmin = true;

// let changableFunc = (name) => {
//   console.log(name + " is a normal user");
// };

// changableFunc("Vaibhav");

// if (isAdmin) {
//   changableFunc = (name) => {
//     console.log("------" + name + " is ADMIN----- you have all access");
//   };
// }

// changableFunc("Savan");

console.log("Name from Person.js::" + p.name);
