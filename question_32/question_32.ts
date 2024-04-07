let current_users:string[]=['admin', 'eric','george','sam','fred']
let new_users:string[]=['ERIC','micheal', 'garry', 'sam', 'root']


new_users.forEach(new_name => {
    current_users.forEach(current_name => {
        if (new_name.includes(current_name) || new_name.toUpperCase().includes(current_name) || new_name.toLowerCase().includes(current_name)){
            console.log(`${new_name} is duplicated.`);
            
        }
        // else {
        //     console.log(`${new_name} is unique.`);
            
        // }
    });
});