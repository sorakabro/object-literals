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



// Vi kan lägga till egenskaper på ett simpelt sätt på någon av objekten.

benjamin.address = "Hamngatan 12321";
benjamin.name = "Olle";

// Vi kan även ändra på egenskaper i ett objekt. det finns två sätt att göra detta på. Första är via punktnotation.

benjamin.age = 31;

// Det andra sätter är på ett arrayliknande sätt.

benjamin["age"] = 45;
benjamin["gender"] = "Female";


// Vill vi ta bort en egenskap, vilket man sällan gör. Istället brukar man sätta värdet till null eller 0


delete benjamin.age;
delete benjamin["age"];

//console.log(benjamin);
