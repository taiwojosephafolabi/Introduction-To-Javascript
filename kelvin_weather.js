//Kelvin Weather Project 

//Input weather in Kelvin
const kelvin = 293;

//Convert to Celsius
let celsius = kelvin - 273;
console.log(`The temperatue is ${celsius} degrees celsius.`);

//Convert to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit); //Round value
console.log(`The temperatue is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton); // Round value
console.log(`The temperatue is ${newton} degrees Newton.`);