// Non Empty List
let usernames = ['admin', 'eric', 'george', 'sam', 'fred'];
usernames.forEach(element => {
    if (element === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else if (usernames.length === 0) {
        console.log('We need to find some users!');
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again`);
    }
});
// Empty List
let usernames1 = [];
if (usernames1.length === 0) {
    console.log('We need to find some users!');
}
usernames1.forEach(element => {
    if (element === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again`);
    }
});
export {};
