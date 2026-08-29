const accountId = 144553
let accountEmail = "aditya60@google.com"
var accountPassword = "1224"
accountcity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "ad@ad.com"
accountPassword = "3241414"
accountcity = "ranchi"

/*
prefer not to use var 
becoz of scope problem 
use let and const
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity,accountState])
