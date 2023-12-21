// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that an equality check == and comparisions check > < >= <= work differently.
// comparision converts null to a numberm treating it as 0.
// That's why null >= 0 is true and null > 0 is false. 


// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// ===
// here === did not convert string to number or any other datatypes. That means 
// === will check both datatype and value if both are same then it will give true 
// or else it will give false.


console.log("2" === 2)