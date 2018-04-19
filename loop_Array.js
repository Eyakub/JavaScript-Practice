let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}


//matching between two array
let myPlaces = ['Dhaka', "BD", 'Hi'];
let friendPlaces = ['Dhaka', 'hi', 'bb'];

for(let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++){
  for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if(myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
      console.log(myPlaces[myPlacesIndex]);
    }
  }
 
}