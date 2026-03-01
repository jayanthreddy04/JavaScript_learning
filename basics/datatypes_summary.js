//primitive

//7 types=>number,string,boolean,null(empty not '0'),undefined(values not declared),symbol,big int

// const a=Symbol('123')
// const b=Symbol('123')
// console.log(a===b);//false

// //big int
// const n=1847454585695857599n;
// console.log(typeof(n));

// //reference or non primitive

// //Array,Object,Functions
// //array
// const fruits=['apple','banana','mango','orange']
// //objects
// let myObj={
//     name:"jayanth",
//     age:20,
//     class:'btech'

// }
// //function
// const myfun =function(){
//     console.log("inside the function");
    
// }
// myfun()

//stack(primitive(stores a copy)) heap(non primitive(stores reference))

let x="jayanth"
let y=x
y="john"

console.log(x);
console.log(y);

//heap
let userone={
    email:"jayanth@gmail.com",
    upi:"jay@ybl"
}
let usertwo=userone
usertwo.email='jay@gmail.com'
console.log(usertwo.email);
console.log(userone.email);






