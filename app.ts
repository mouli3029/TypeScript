function add(n1:number,n2:number,showResult:boolean,phrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }
    else{
        return result;
    }
}

// No Type assignment here because Type inference (built in feature)
// It understands what type is stored and assign the type automatically;
let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";


add(number1,number2,printResult,resultPhrase);