// primitive datatypes

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const socreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 9007199254740991n
// console.log(typeof bigNumber)


// Reference or Non-primitive datatypes

// 3 : Array, Object, Functions 

const hero = ['Saktiman', 'Krish', 'Tringa', 'Naagraj', 'Doga']

let myObj = {
    name : 'Shailendra',
    age : 28
}

const myFunction = function() {
    console.log("Hello World")
}


// console.log(typeof myFunction);


// ++++++++++++++++++++++ Heap and Stack Memory +++++++++++++++++++++++

// Stack (Primitive values), Heap (Non-Primitive Values)

// Stack Memory
let myName = "Shailendra Jain"

let nickName = myName

nickName = "Shailu"

// console.log(myName)
// console.log(nickName)

// Heap Memory

let objOne = {
    name : 'Shailendra',
    age : '28',
    email : 'shailu@gmail.com'
}

let objTwo = objOne

objOne.email = 'shailendra@gmail.com'

console.log(objOne);
console.log(objTwo);