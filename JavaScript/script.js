// let name = "JOHN"
// let age = 21
// let promoted = true
// let score
// let city = null

// console.log(typeof name);
// // console.log(age);
// // console.log(promoted);
// console.log(typeof score);
// console.log(typeof city);

// let nname = Boolean(name);
// console.log(typeof(nname))

// let a = "10";
// let b = 10;

// console.log(a+b) // 1010  because string too have + operator in use
// console.log(a*b) //100   

// let a = 15
// let b = 12

// if(a > b){
//     console.log(`${a} is greater than ${b}`)
// }
// else{
//      console.log(`${b} is greater than ${a}`)
// }

// a > b && console.log("a is greater") // it is correct

// let x 
// let value = x ?? 10  
// console.log(value)  // it takes 10 if x is  null or undefined

// let x 
// let value = x || 10  
// console.log(value) // it takes 10 if x has falsy values

// (function greet() {
//     console.log("hello");
// })();

// function greet(student){
//     console.log(`hello ${student}`)
// }

// greet("garv")

// function add(a,b){
//     return a+b
// }
// console.log(add(4,5))

// function add(){
//     // console.log(arguments) // when we don't know that how much arguments are there
//     let sum = 0;
//     for(let i = 0 ; i < arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(add(4,5,6,1,2,3));

//for arrow functions

// let sum = (...args)=>{
//     console.log(args) // it will create an array of the arguments
// }

// let main = (x) => {
//     x();
// }
// main(()=>{
//     console.log("hello world");
// })

// let f1 = (x) =>{
//     console.log(x);
// }
// main(()=>f1(5));

const points = [10,2,5,7,8]

points.forEach((val , idx)=>{
    console.log(val , idx)
})