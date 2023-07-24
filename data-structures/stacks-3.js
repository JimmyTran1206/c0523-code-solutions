export function get2ndFromTop(stack) {
  let count = 2;
  const items = [];
  while (count > 0) {
    if (stack.peek() === undefined) {
      for (let i = items.length - 1; i >= 0; i--) {
        stack.push(items[i]);
      }
      return undefined;
    }
    items.push(stack.pop());
    count--;
  }
  const target = items[items.length - 1];
  for (let i = items.length - 1; i >= 0; i--) {
    stack.push(items[i]);
  }
  return target;
}

export function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const first = stack.pop();
  stack.push(value);
  stack.push(first);
}
