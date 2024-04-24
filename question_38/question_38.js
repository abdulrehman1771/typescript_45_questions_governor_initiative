const describe_city = (city_name = "Karachi", country_name = "Pakistan") => {
    console.log(`${city_name} is in ${country_name}.`);
};
describe_city();
describe_city("Mumbai", "India");
describe_city("Cape Town", "South Africa");
describe_city("Dhaka", "Bangladesh");
export {};
