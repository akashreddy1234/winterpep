//rest parameters
// a function to accept an indefinite number of arguments as an array 
//its basically an aggregation of remaining argumnets into single parameter 
//eg:-
// function fun(a,b,...args){
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }
// fun(10,20,"hello",40,50,60); //a=10,b=20,args=["hello",40,50,60]

//eg:-
// function sum(...args){
//     let total=0;
//     for(let arg of args){
//         total+=arg;
//     }
//     return total;
// }
// console.log(sum(1,2,3)); //6


//eg:-Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments.
// function logArguments(...a){
//     for(let arg of a){
//         console.log(arg);
//     }
// }


//eg:-Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for each name
function createMessage(message="Hello",...names){
  let arr=[];
  for(let name of names){
      arr.push(`${message} ${name}`);
  }
  return arr;
}
console.log(createMessage("Hello","John","Doe","Smith")); 
