// 1:-Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
// }
// ask(
//  "Do you agree?",
//  function() { alert("You agreed."); },
//  function() { alert("You canceled the execution."); }
// );

//ans:-
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
//  }
//  ask(
//   "Do you agree?",
//   () => { alert("You agreed."); },
//   () => { alert("You canceled the execution."); }
//  );

//2:-Identify the output of the following code
// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(materials.map((material) => material.length));

//ans:-
// [8, 6, 7, 9]

//3:-Write an arrow function called square that takes a number as an argument and returns its square

//ans:-
// let square=(num)=>num*num;
// console.log(square(5)); //25


//4:-Given an array of numbers, use an arrow function to create a new array that contains the
// squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

//ans:-
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map((num) => num * num);
// console.log(squares); 

//5:-Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".

//ans:-
// let str = "hello";
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

//6:-Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number. For example:
// const result = chainable(5).add(3).multiply(2); // result should be 16

//ans:-
const chainable = (value) => {
    return {
        add: (num) => chainable(value + num),
        multiply: (num) => chainable(value * num),
        value: () => value
    };
};
const result = chainable(5).add(3).multiply(2).value();
console.log(result); 
