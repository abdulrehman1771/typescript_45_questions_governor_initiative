import * as readlineSync from 'readline-sync';

//function for user input for number
function userInputNum(msg:string):number{
    const inp = readlineSync.question(msg);
    return parseFloat(inp);
}


//function for user input for number
function userInputStr(msg:string):string{
    const inp = readlineSync.question(msg);
    return inp;
}

let name:string = userInputStr("Please enter your name.\n");

console.log(`Hello! ${name}, Would you like to learn typecript today?`);