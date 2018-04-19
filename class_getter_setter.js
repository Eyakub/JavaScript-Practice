/**
 * in object we have to use (,)comma after every variable or method
 * but in CLASS we don't have to use (,)comma whatever we declare
 */

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
  
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console (method)
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
