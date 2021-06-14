// Any other value other than 'as-number','as-text' is not allowed . This is literal types.
function combine(input1:number | string ,input2:number | string,resultCovertion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultCovertion === "as-number"){
        result = +input1 + +input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }
    return result;
    /* if (resultCovertion === 'as-number') {
        return +result;
    } else{
        return result.toString();
    } */
}

const combineAges = combine(30,26,'as-number');
console.log(combineAges);


const combineStringAges = combine(30,26,'as-text');
console.log(combineStringAges);

const combinedNames  = combine('Max','Anna','as-text');
console.log(combinedNames)
// Inorder to access both numbers as well as Strings we use union type