export default class HolbertonCourse {
    constructor(name, length, students) {
      // Verify and assign the 'name' attribute
      this._name = typeof name === 'string' ? name : '';
  
      // Verify and assign the 'length' attribute
      this._length = typeof length === 'number' ? length : 0;
  
      // Verify and assign the 'students' attribute
      this._students = Array.isArray(students) ? students : [];
    }
  
    // Getter and Setter for 'name'
    get name() {
      return this._name;
    }
  
    set name(newName) {
      // Validate the type of 'newName' before updating the attribute
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and Setter for 'length'
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      // Validate the type of 'newLength' before updating the attribute
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    // Getter and Setter for 'students'
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      // Validate the type of 'newStudents' before updating the attribute
      if (Array.isArray(newStudents)) {
        this._students = newStudents;
      } else {
        throw new TypeError('Students must be an array');
      }
    }
  }
  