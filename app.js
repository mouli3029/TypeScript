// Object type
/* const person : {
    name : string;
    age : number
} = {
    name : "Venkata Mouli",
    age : 30
} */
var person = {
    name: "Venkata Mouli",
    age: 30
};
// Object Types in TS 
// person is not the JS object it is object types
// If we apply the type object to person then we cannot access the properties.
/* const person : object = {
    name : "Venkata Mouli",
    age : 30
} */
console.log(person.name); // TS Infers the type of properties
