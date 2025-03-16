// Macabenta, Vhardey John F
// Do-while Activity
const realPassword = "ibecamewhatshewantedbutsheisnothereanymore"; // assigned a value for our password

do { // entered a do while loop
  password = prompt("Please enter your password;"); // asks user to enter their password
  if (password != realPassword){ // if statement for the passwordif it dont match
    console.log("Incorrect, try again."); // prints the following
  } // exits for loop 
  
}while (password != realPassword); // enter while loop until the coondition returns true

console.log("Acces granted."); // executes after our whip returns true.