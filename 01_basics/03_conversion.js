let score = "33abc"

console.log(typeof score);

let valInnumber = Number(score);// jo bhi type ho usko capitalize kardo to convert to that type

console.log(typeof valInnumber);
console.log(valInnumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1, false => 0

let isLoggedIn = ""

let boolisLoggedIn = Boolean(isLoggedIn)

console.log(boolisLoggedIn);


// true => 1, false => 0
// "" => 0, "aditya" => 1