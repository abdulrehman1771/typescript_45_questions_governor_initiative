const show_magicians = (lst:string[]):void => {
    lst.forEach(element => {
       console.log(element)
    });
}

const make_great = (lst:string[]) => {
    lst.forEach(element => {
        console.log('The Great ' + element);
    });
    
}

let magicians = ["David Blaine","Criss Angel", "Harry Houdini", "Siegfried and Roy", "Derren Brown"]

show_magicians(magicians)


make_great(magicians)