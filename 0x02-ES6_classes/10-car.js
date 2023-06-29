export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Getter for 'brand' attribute
    get brand() {
      return this._brand;
    }
  
    // Getter for 'motor' attribute
    get motor() {
      return this._motor;
    }
  
    // Getter for 'color' attribute
    get color() {
      return this._color;
    }
  
    // Method to clone the car
    cloneCar() {
      const carClass = Object.getPrototypeOf(this).constructor;
      return new carClass(this._brand, this._motor, this._color);
    }
  }
  