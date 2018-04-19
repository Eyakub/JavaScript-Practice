let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;


//***************/
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
  	return this.myAirplane;
	}
};



/*************************/
let Airplane = {};

export default Airplane;

//array object with two value
Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500
  }
];
//exporting from another .js file
import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element)
                                     {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();