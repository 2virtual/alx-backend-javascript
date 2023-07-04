export default function getStudentsByLocation(students, city) {
  //returns an array of objects who are located in a specific city.
  return students.filter((student) => student.location === city);
}
