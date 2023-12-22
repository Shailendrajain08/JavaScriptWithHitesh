// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 3, 8)
// console.log(myCreatedDate)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("08-04-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time `)

var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}); // For Indian timezone
console.log(s)

let myDate2 = newDate.toLocaleString('default',{
    timeZone: 'Asia/Kolkata',
    weekday: "long",
    day: "2-digit",
    month : "2-digit",
    year: "2-digit",
    hour : "2-digit",
    minute : "2-digit",
    second : "2-digit"
})
console.log(myDate2)


