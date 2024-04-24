const show_magicians = (lst:string[] | number[] | boolean[]):void => {
    for (let a=0; a<lst.length; a++){
        console.log(lst[a]);       
    }
}


let magicians = ["David Blaine","Criss Angel", "Harry Houdini", "Siegfried and Roy", "Derren Brown"]

show_magicians(magicians)