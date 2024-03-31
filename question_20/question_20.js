//Problem: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
import * as readlinesync from 'readline-sync';
function getUserInputNum(question) {
    const inp = readlinesync.question(question);
    return parseFloat(inp);
}
function getUserInputStr(num) {
    const inp1 = readlinesync.question(num);
    return inp1;
}
let cities = [], mountains = [], languages = [], countries = [], rivers = [];
while (true) {
    let choices = getUserInputStr('Please enter the Name of your choice to add in our entry : 1, 2, 3, 4, 5 \n1. Cities \n2. Countries \n3. Languages \n4. Mountains \n5. Rivers \n');
    switch (choices.toLowerCase()) {
        case ('1' || 'cities'):
            let tmp = getUserInputStr(`Enter the name of city to add the entry to our list : \n`);
            cities.push(tmp);
            console.log('Current entries', cities);
            break;
        case ('2' || 'countries'):
            let tmp2 = getUserInputStr(`Enter the name of country to add the entry to our list : \n`);
            countries.push(tmp2);
            console.log('Current entries', countries);
            break;
        case ('3' || 'languages'):
            let tmp3 = getUserInputStr(`Enter the name of language to add the entry to our list : \n`);
            languages.push(tmp3);
            console.log('Current entries', languages);
            break;
        case ('4' || 'mountains'):
            let tmp4 = getUserInputStr(`Enter the name of mountain to add the entry to our list : \n`);
            mountains.push(tmp4);
            console.log('Current entries', mountains);
            break;
        case ('5' || 'rivers'):
            let tmp5 = getUserInputStr(`Enter the name of river to add the entry to our list : \n`);
            rivers.push(tmp5);
            console.log('Current entries', rivers);
            break;
        default:
            console.log('Wrong Entry');
            break;
    }
    let inp2 = getUserInputStr('Do you want to add another entry? \n').toLowerCase();
    if (inp2 === 'no' || inp2 === 'n' || inp2 === 'q' || inp2 === 'quit' || inp2 === 'e' || inp2 === 'exit') {
        break;
    }
    else if (inp2 === 'yes' || inp2 === 'y') {
        continue;
    }
    else {
        console.log("Please enter correct entry.\n");
        break;
    }
}
