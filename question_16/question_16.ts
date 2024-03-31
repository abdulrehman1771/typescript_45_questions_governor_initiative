let inviteList:string[]=[
    'Ammar','Ali','Daniyal','Ramish'
];

console.log('My invitation list includes: ');
for(let a=0; a<inviteList.length;a++){
    console.log(`${inviteList[a]}`);
}
console.log('\nDaniyal is not available and can\'t attend, so I new invitation list is: ')
inviteList[2]='Asif';

for (let index = 0; index < inviteList.length; index++) {
    const element = inviteList[index];
    console.log(element)
}

console.log('\nThere are more guests to invite and updated invitation, it becomes: ');
inviteList = inviteList.concat(['Zahid', 'Muzammil', 'Fahad']);

for(let a=0;a<inviteList.length;a++){
    console.log(inviteList[a]);
}