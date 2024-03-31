let invitiationList:string[]=[
    'Ammar','Ali','Daniyal','Ramish'
];

console.log('My invitation list includes: ');
for(let a=0; a<invitiationList.length;a++){
    console.log(`${invitiationList[a]}`);
}
console.log(`${invitiationList[2]} is not available and can\'t attend, so my new invitation list is: `)
invitiationList[2]='Asif';

for (let index = 0; index < invitiationList.length; index++) {
    const element = invitiationList[index];
    console.log(element)
}