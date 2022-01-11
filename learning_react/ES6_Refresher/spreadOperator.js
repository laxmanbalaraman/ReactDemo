const first = [1, 2, 3];
const second = [4, 5, 6];

const merge = first.concat(second);

// another way
const combined = [...first, ...second];

// but second way is more better because we can easily add value anywhere we need

const newCombined = [...first, 'a', ...second, 'b'];

console.log(newCombined);


const foo = {name: 'John Doe'};
const bar = {job: 'Engineer'};

const objectsCombined = {...foo, ...bar, location: 'Australia'};

console.log(objectsCombined);
