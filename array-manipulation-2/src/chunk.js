/* exported chunk */
const chunk = (array, size) => {
  if (size >= array.length) {
    return array;
  } else {
    // const arrCopy=[...array];
    const chunkNumber = Math.floor(array.length / size);
    const remainingNumber = array.length % size;
    const result = [];
    const chunk = [];
    let startingIndex = 0;
    for (let i = 0; i < chunkNumber; i++) {
      for (let j = 0; j < size; j++) {
        chunk.push(array[startingIndex + j]);
      }
      const chunkCopy = [...chunk]; // without this copy, everytime chunk resets, the result becomes empty
      result.push(chunkCopy);
      startingIndex += size;
      chunk.length = 0; // reset chunk array for next loop.
    }
    if (remainingNumber !== 0) {
      const remainingArray = array.slice(-remainingNumber); // may need more loops if not using slice
      result.push(remainingArray);
      return result;
    } else {
      return result;
    }
  }
};
