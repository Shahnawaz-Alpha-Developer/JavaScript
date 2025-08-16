const accountId = 144553
let accountEmail = "shahnawaz@gmail.com"
var accountPassword = "123456"  // not in use now
accountCity = "Jaipur" // not a good method of using a variable
let accountState;


// learning from documentation to investigation

//accountId = 2 // not allowed
accountEmail = "khan@gmail.com"
accountPassword = "789456"
accountCity = "Noida"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




