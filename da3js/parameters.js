// function fun(a,b){
//     return a+b;
// }
// res=fun(5,10);
// console.log(res);


//default parameters
// function fun(a,b=1){
//     return a+b;
// }
// res=fun(5,10);
// res=fun(5);
// console.log(res);

// function fun(x,y=7,z=42){
//     console.log(x+y+z);
//     return x+y+z;
// }
// console.log(fun(1,undefined));  //here y becomes undefined  but y=7 is default

// function fun(x,y=7,z=42){
//     console.log(x+y+z);
//     return x+y+z;
// }
// console.log(fun(1,null));  //here y becomes null


//Write a function calculateDiscount that takes two parameters: price and discount (with a default value of 10). The function should
//return the final price after applying the discount.
// function calculateDiscount(price,discount=10){
//     return price-price*discount/100;
// }
// console.log(calculateDiscount(100)); //90
// console.log(calculateDiscount(100,20)); //80

//eg:-Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), 
// and country (defaulting to "Unknown"). Return an object with these properties.
function createUserProfile(usernme,age=25,contry="unknown"){
    return {username:usernme,age:age,country:contry};
}
console.log(createUserProfile("John"));


