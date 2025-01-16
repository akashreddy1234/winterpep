//spread(...) allows us to quickly copy all or part of an existing array into a new array.
//eg:-
// const a=[1,2,3];
// const b=[4,5,6];
// const c=[...a,...b];
// console.log(c); //[1,2,3,4,5,6]

// eg:-Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator
// function mergeArrays(a,b){
//     return [...a,...b];
// }
// console.log(mergeArrays([1,2,3],[4,5,6])); 


//eg:-Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers
function sum(a,b,c){
    return a+b+c;
}
let arr=[1,2,3];
console.log(sum(...arr));