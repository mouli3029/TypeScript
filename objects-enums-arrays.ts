
/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {ADMIN,READ_ONLY,AUTHOR};

const person = {
    name : "Venkata Mouli",
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : Role.ADMIN
}

if(person.role === Role.AUTHOR){
    console.log('is author')
}

let favouriteActivities : string[];
favouriteActivities = ['Sports'];
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}





console.log(person.name);