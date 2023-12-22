const myName = "Shailendra";
const myAge = 28;

// console.log(myName + " " + myAge + " Value");  Old way to concatination 
//                                                still working but not recomanded.

// console.log(`Hello my Name is ${myName} and my Age is ${myAge}`)

const gameName = new String("GodOfWar-3");

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('a'))

const newSubstring = gameName.substring(0,6)
// console.log(newSubstring)

const newString = gameName.slice(-8,4)
// console.log(newString)

const newString2 = "      Shailendra      "
// console.log(newString2)
// console.log(newString2.length)
// console.log(newString2.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));