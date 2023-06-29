import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for 'range' attribute
  get range() {
    return this._range;
  }

  // Setter for 'range' attribute
  set range(value) {
    this._range = value;
  }

  // Method to clone the car
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color, this._range);
  }
}
