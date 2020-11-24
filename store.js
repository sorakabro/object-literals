// store object

let ica = {
    name: "Ica fäladstorget",
    address: "Gatan 123321",
    zipcode: "123321",
    city: "Lund",
    staff: [],
    products: []
}


// person objects

let benjamin = {
    firstName: "Benjamin",
    lastName: "Oldén", 
    age: 30,
    salary: 45000,
    gender: "Male",
    worksAt: {}
}

let erik = {
    firstName: "Erik",
    lastName: "Andersson", 
    age: 45,
    salary: 23000,
    gender: "Male",
    worksAt: {}
}

let sofia = {
    firstName: "Sofia",
    lastName: "Olsson", 
    age: 22,
    salary: 48000,
    gender: "Male",
    worksAt: {}
}

// insert the person into the staff array in ica
ica.staff.push(benjamin, sofia);

// Add the worksat array to ica. 
benjamin.worksAt = ica;

console.log(ica);