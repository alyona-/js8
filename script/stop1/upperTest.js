let string = 'I am  the code';

console.log(
    string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(', ')
);

console.log(typeof string);