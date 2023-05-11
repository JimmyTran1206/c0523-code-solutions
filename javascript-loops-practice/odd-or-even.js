/* exported oddOrEven */
const oddOrEven = (numbers) => {
  return numbers.reduce((parityArray, val) => {
    if (val % 2 === 0) {
      parityArray.push('even');
    } else {
      parityArray.push('odd');
    }
    return parityArray;
  }, []);
};
