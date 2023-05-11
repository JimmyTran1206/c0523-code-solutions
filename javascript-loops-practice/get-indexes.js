/* exported getIndexes */
const getIndexes = (array) => {
  let initialIndex = 0;
  const indexArr = array.reduce((indexArr, val) => {
    indexArr.push(initialIndex++);
    return indexArr;
  }, []);
  return indexArr;
}; // using array.reduce method because most of the practices are dealing with arrays
