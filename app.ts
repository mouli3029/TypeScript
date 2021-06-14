function add1(n1:number,n2:number){
    return n1+ n2;
}
// void type -> function doesnot have a return type.
// void --> returns undefined.
function printResult1(num: number){
    console.log("Result: "+num);
}

// Callback
function addAndHandle(n1:number,n2:number,cb:(num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult1(add1(5,12));

let combinedValues: (a:number,b:number) => number; // number is a return type.

combinedValues = add1;
//combinedValues = printResult1; // TS doesnot complaint (but it doesnot take two parameters.)
// combinedValues = 5;

console.log(combinedValues(8,8));
let someValue: undefined; // undefined is a valid type in JS . But we cannot use undefined with function eventhough the void function returns undefined.

addAndHandle(10,20,(result)=> {
    console.log(result);
});