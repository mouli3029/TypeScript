function combine(input1, input2, resultCovertion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultCovertion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine(30, 26, 'as-number');
console.log(combineStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
// Inorder to access both numbers as well as Strings we use union type
