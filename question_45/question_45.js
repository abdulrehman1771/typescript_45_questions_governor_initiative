const cars = ({ manufacturer, model, ...rest }) => {
    const car = { manufacturer, model, ...rest };
    // console.log(`${Object.keys(manufacturer)}: ${manufacturer}`);
    // console.log(`${Object.keys(model)}: ${model}`);
    for (const [key, value] of Object.entries(car)) {
        console.log(`${key}: ${value}`);
    }
};
cars({
    manufacturer: "Toyota",
    model: "Corolla",
    transmission: "Manual & Automatic",
    body_type: "Sedan",
    "Sating Capacity": "5 - Persons",
});
export {};
