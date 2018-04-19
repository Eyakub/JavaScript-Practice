/*
We prepended the property names with underscores (_). 
Developers use an underscore before a property name to indicate 
a property or value should not be modified directly by other code.
We recommend prepending all properties with an underscore, 
and creating setters for all attributes you want to access 
later in your code.


*/

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    //checking ageIn is digit or other's input
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};


person.age = 'Thirty-nine'; //invalid input
person.age = 39;

console.log(person.age); 