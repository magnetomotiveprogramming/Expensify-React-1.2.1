const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const {name, age, nickName = 'Andy', school: education = 'University'} = person; 
// Equivalent to below:
// const name = person.name;
// const age = person.age;
console.log(`${name} is ${age}`)

//we can also set default values, if it doesn't exist
console.log(`${name}'s nickname is ${nickName}`)

//we can also rename default values
console.log(`${name}'s highest education is ${education}`)


// As seen below, we can rename out destructured variables.
const {city, temp: temperature} = person.location; 
console.log(`${city} is ${temperature} farenheit`)




// ARRAY-------------------------------------------------------
const address = ['12 Jay St', 'Ohio', 'USA', '214214'];

const [street, state, country, zip] = address;

console.log(`You are in ${street}, ${state}.`);

//We could aven be more selevtive of what we want to destructor from the array. Just leave commas to denote the position in the array

const personalDetails = ['Batman', , 'male', 'dark', 'nothing'];

const [hero, sidekick = 'robin', , , superpowers] = personalDetails;

//Here we also set default value for sidekick
console.log(`${hero}, has ${superpowers} as a superpower. His sidekick is ${sidekick}`)
