export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Getter for 'size'
    get size() {
      return this._size;
    }
  
    // Setter for 'size'
    set size(value) {
      this._size = value;
    }
  
    // Getter for 'location'
    get location() {
      return this._location;
    }
  
    // Setter for 'location'
    set location(value) {
      this._location = value;
    }
  
    // Symbol.toPrimitive method
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this._size;
      }
      if (hint === 'string') {
        return this._location;
      }
      return this;
    }
  }
  