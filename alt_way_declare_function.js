function isGreaterThan (numberOne, numberTwo) {
  if(numberOne > numberTwo){
    return true;
  }else{
    return false;
  }
}

isGreaterThan(1, 2);

////////////////
/*different way to declare function if there is only one
parenthesis/parameter
*/
const volumeOfSphere = diameter => 
   (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
