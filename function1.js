let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};


const takeOrder = (topping) => {
  console.log(`Order: ${topping}`);
}
var topping = "pizza topped with mushrooms";
takeOrder('pizza topped with mashrooms');
//takeOrder(topping);

****************
let orderCount = 0;

const pizzaOrder = (noOfPizza) => {
  var totalPrice = noOfPizza * 7.5;
  return totalPrice;
};

console.log(pizzaOrder(++orderCount));


//**************/
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++; //3 bar function call kora hoise tai orderCount=3
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

//counting tax
const getTax = () => {
 return getSubTotal(orderCount) * 0.06; 
};

//in total value
const getTotal = () => {
  return getSubTotal(orderCount) + getTax(); 
}; 

console.log(getSubTotal(orderCount));
console.log(getTotal());