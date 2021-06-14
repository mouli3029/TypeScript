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
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin'); // push is an exception in TS which TS cannot find.
// person.role[1] = 10;
// Tells JS it is an array of strings.
var favouriteActivities;
favouriteActivities = ['Sports'];
// In order to work all types in array like string number add any[] type.
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// Object Types in TS 
// person is not the JS object it is object types
// If we apply the type object to person then we cannot access the properties.
/* const person : object = {
    name : "Venkata Mouli",
    age : 30
} */
console.log(person.name); // TS Infers the type of properties
