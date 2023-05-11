/* exported getStudentNames */
const getStudentNames = (students) => {
  return students.reduce((nameArray, val) => {
    nameArray.push(val.name);
    return nameArray;
  }, []);
};
