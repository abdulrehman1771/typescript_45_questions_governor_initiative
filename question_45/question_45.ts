const cars = ({manufacturer, model, ...rest}:{manufacturer:string, model:string, [rest:string]:string}) => {
    const car = {manufacturer, model, ...rest}
    
    for (const [key, value] of Object.entries(car)) {
        console.log(`${key}: ${value}`);            
    }
}

cars({
    manufacturer:"Toyota",
    model:"Corolla",
    transmission:"Manual & Automatic",
    body_type:"Sedan",
    "Sating Capacity":"5 - Persons",
})