// store object

let ica = {
    name: "Ica fäladstorget",
    address: "Gatan 123321",
    zipcode: "123321",
    city: "Lund",
    staff: [],
    products: [],
    hireStaff: function(person){
        // Vi använder oss av "this" här, för att "this" hänvisar till det egna objektet.
        // Så "this" = ica
        this.staff.push(person);
        person.worksAt = this;
        return this;
    },
    fireStaff: function (person) {
        // Vi använder här en arraymetod som heter filter(), den filtrerar bort element utifrån ett villkor.
        //Är villkoret sant, så behålls elementet. Är villkoret falskt så sorteras det bort.
        this.staff = this.staff.filter(p => p !== person);
        return this;
    }
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
//ica.staff.push(benjamin, sofia);

// Add the worksat array to ica. 
benjamin.worksAt = ica;



