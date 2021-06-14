let userInput : unknown; // We donot know yet what user enters.
let userName: string;

userInput = 5;
userInput = "Max";
/* userName = userInput;  */// shows error if we change type unknown to any it doesnot show.
// Because TypeScript neglects the type checking with any.


if(typeof userInput === "string"){
    userName = userInput;
    // We need an extra type checking to assign an unknown to a string.
}
