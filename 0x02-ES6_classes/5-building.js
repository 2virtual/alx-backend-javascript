class Building {
    /**
     * Creates an instance of Building.
     * @param {Number} sqft - The square footage of the building.
     * @throws {Error} - If a subclass does not implement the evacuationWarningMessage method.
     */
    constructor(sqft) {
      // Check if the constructor is called from a subclass
      if (this.constructor !== Building) {
        // Verify that the subclass implements the evacuationWarningMessage method
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error(
            'Class extending Building must override evacuationWarningMessage'
          );
        }
      }
      this.sqft = sqft;
    }
  
    /**
     * Setter for the square footage attribute.
     * @param {Number} sqft - The square footage of the building.
     * @throws {TypeError} - If the sqft parameter is not a number.
     */
    set sqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      this._sqft = sqft;
    }
  
    /**
     * Getter for the square footage attribute.
     * @returns {Number} - The square footage of the building.
     */
    get sqft() {
      return this._sqft;
    }
  }
  
  export default Building;
  