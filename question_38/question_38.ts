const describe_city = (city_name:string = "Karachi", country_name:string = "Pakistan"):void => {
    console.log(`${city_name} is in ${country_name}.`);
}

describe_city()
describe_city("Mumbai","India")
describe_city("Cape Town","South Africa")
describe_city("Dhaka","Bangladesh")