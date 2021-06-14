// Object type
/* const person : {
    name : string;
    age : number
} = {
    name : "Venkata Mouli",
    age : 30
} */

const person  = {
    name : "Venkata Mouli",
    age : 30,
    hobbies : ['Sports','Cooking']
}

// Tells JS it is an array of strings.
let favouriteActivities : string[];
favouriteActivities = ['Sports'];

// In order to work all types in array like string number add any[] type.
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}



// Object Types in TS 
// person is not the JS object it is object types


// If we apply the type object to person then we cannot access the properties.
/* const person : object = {
    name : "Venkata Mouli",
    age : 30
} */



console.log(person.name);  // TS Infers the type of properties