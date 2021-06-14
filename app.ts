// Object type
/* const person : {
    name : string;
    age : number
} = {
    name : "Venkata Mouli",
    age : 30
} */

const person :{
    name : string;
    age : number;
    hobbies : string[];
    role : [number,string]; // marks the tuple type.(i want speacial array  with exactly two elements first one number and second value as string)
}  = {
    name : "Venkata Mouli",
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : [2,'author']
}

person.role.push('admin'); // push is an exception in TS which TS cannot find.
// person.role[1] = 10;

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