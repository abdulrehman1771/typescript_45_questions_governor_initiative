let invitList:string[]=[
    'Ammar','Ali','Daniyal','Ramish'
];

console.log('My invitation list includes: ');
for(let a=0; a<invitList.length;a++){
    console.log(`${invitList[a]}`);
}
console.log('\nDaniyal is not available and can\'t attend, so I new invitation list is: ')
invitList[2]='Asif';
for (let index = 0; index < invitList.length; index++) {
    const element = invitList[index];
    console.log(element)
}

console.log('\nThere are more guests to invite and updated invitation, it becomes: ');
invitList = invitList.concat(['Zahid', 'Muzammil', 'Fahad']);
for(let a=0;a<invitList.length;a++){
    console.log(invitList[a]);
}

console.log("\n We can just invite 2 guests at this time, and  shortlisting guests are: \n");
for(let index=0; index<invitList.length;index++){
    const element = invitList[index]
    console.log('Guest Removed : ', invitList.splice(2,5));
}
console.log("Shortlisted Guests: ", invitList);

for(let index=0; index<invitList.length; index++){
    const element = invitList[index]
    console.log('Guests invited: ', invitList.splice(0,));
}
console.log("Guest list: ", invitList);