// Type unknown, because we dont know what its gonna be. Could be a number, string, etc ...
// so we can store any value without getting a compilation error

let userInput: unknown;
let userName: string;
userInput = 5; 
userInput = 'M';

if (typeof userInput === 'string'){
    userName = userInput;
}

// The "never" type
// this function is intended to never return anything, because it shoud stop/break/crash the program 
// so from a code quality perspective, it might be clearer to state it by adding the "never"
function generateError(msg: string, code:number): never {
    throw {message: msg, errorCode:code};
}

generateError('An error occured !',500)