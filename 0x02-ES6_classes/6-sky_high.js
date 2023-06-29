import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Getter for the floors attribute.
   * @returns {Number} - The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Setter for the floors attribute.
   * @param {Number} value - The number of floors in the building.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Overrides the evacuationWarningMessage method from the Building class.
   * @returns {String} - The evacuation warning message for the SkyHighBuilding.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
