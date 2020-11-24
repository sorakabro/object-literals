// Vi vill skapa info om en person. Till exempel namn, ålder, kön osv.

let name = "Benjamin";
let age = 30;
let gender = "Male";


// Istället för att skapa en massa enskila variabler för olika personer, så kan vi
//klumpa ihop de variablerna som hör ihop till ett och samma objekt.

let benjamin = {
    name: "Benjamin", 
    age: 30,
    gender: "Male"
};

let maria = {
    name: "Maria",
    age: 28,
    gender: "Female"
}

console.log(benjamin, maria);