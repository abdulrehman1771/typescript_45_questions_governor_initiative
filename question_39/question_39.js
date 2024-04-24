const city_country = (city, country) => {
    return `"${city}", "${country}"`;
};
let a = city_country("Dhaka", "Bangladesh");
let b = city_country("Cape Town", "South Africa");
let c = city_country("Mumbai", "India");
console.log(a);
console.log(b);
console.log(c);
export {};
