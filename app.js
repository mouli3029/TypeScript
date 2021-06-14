"use strict";
var userInput; // We donot know yet what user enters.
var userName;
userInput = 5;
userInput = "Max";
/* userName = userInput;  */ // shows error if we change type unknown to any it doesnot show.
// Because TypeScript neglects the type checking with any.
if (typeof userInput === "string") {
    userName = userInput;
    // We need an extra type checking to assign an unknown to a string.
}
// NEVER TYPE
// It returns nothing (more precisely  it returns never)
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
