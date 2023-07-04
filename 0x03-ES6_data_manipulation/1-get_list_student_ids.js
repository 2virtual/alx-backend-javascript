export default function getListStudentIds(arr) {
  //function to return an array of ids from a list of object.
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
}
