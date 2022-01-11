const address = {
    street: '',
    city: '',
    country: '',
};

const street = address.street;
const city = address.city;
const country = address.country;

// is same as

const {street, city, country} = address;

// alias a constant 

const {street: st} = address
