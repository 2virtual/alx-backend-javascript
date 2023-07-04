export default function getStudentIdsSum(students) {
  //function accepts value and uses reduce to add up
  return students.reduce((agg, student) => agg + student.id, 0);
}
