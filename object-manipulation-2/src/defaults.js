/* exported defaults */
const defaults = (target, source) => {
  const sourceCopy = { ...source }; // without this, the code wont work because source is not modified, again, deleting does not work on original 'source'

  for (const x in target) {
    for (const y in sourceCopy) {
      if (x === y) {
        delete sourceCopy[y];
      }
    }
  }
  for (const z in sourceCopy) {
    target[z] = sourceCopy[z];
  }
};
