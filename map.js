let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(animals){
  return animals[0];
});

console.log(secretMessage.join(' '));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(bigNumbers){
  return bigNumbers / 100;
});


//now using array function syntex
let secretMessage = animals.map(animals => animals[0]);
//19 === 4 both same working