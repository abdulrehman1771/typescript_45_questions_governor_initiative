const show_magicians = (lst) => {
    lst.forEach(element => {
        console.log(element);
    });
};
const make_great = (lst) => {
    let tmp = [];
    lst.forEach(element => {
        tmp.push('The Great ' + element);
    });
    return tmp;
};
let magicians = ["David Blaine", "Criss Angel", "Harry Houdini", "Siegfried and Roy", "Derren Brown"];
show_magicians(magicians);
let great_added = make_great(magicians);
console.log(great_added);
export {};
