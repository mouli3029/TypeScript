function combine(input1:number | string ,input2:number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }
    return result.toString() + input1.toString();
}

const combineAges = combine(30,26);
console.log(combineAges);

const combinedNames  = combine('Max','Anna');
console.log(combinedNames)
// Inorder to access both numbers as well as Strings we use union type