let usernames:string[]=['admin', 'eric','george','sam','fred']

while(true){
    if(usernames[a]==='admin'){
        console.log('Hello admin, would you like to see a status report?');
        usernames.splice(a,0)
    } 
    else if(usernames.length===0){
        console.log('We need to find some users!');
        break;
        
    } else{
        console.log(`Hello ${usernames[a]}, thank you for logging in again`);
        usernames.splice(a,0)
    }

}