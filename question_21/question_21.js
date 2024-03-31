let myobj = {
    stdid: 1,
    name: 'Abdul Rehman',
    age: 18,
    favHobby: ['Playing Games', 'Computers', 'Networking'],
    isMarried: false,
    stdcard() {
        return this.name + this.age + this.isMarried;
    }
};
console.log(myobj.stdcard());
export {};
