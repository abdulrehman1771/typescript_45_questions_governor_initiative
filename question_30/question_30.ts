let usernames:string[]=['admin', 'eric','george','sam','fred']

usernames.forEach(element => {
    if(element==='admin'){
        console.log('Hello admin, would you like to see a status report?');
    } else{
        console.log(`Hello ${element}, thank you for logging in again`);
        
    }
    
});