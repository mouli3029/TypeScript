// We can use now use Combinable instead of number | string
function combine(input1, input2, resultCovertion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCovertion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    /* if (resultCovertion === 'as-number') {
        return +result;
    } else{
        return result.toString();
    } */
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine(30, 26, 'as-text');
console.log(combineStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
// Inorder to access both numbers as well as Strings we use union type
