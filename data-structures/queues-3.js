export function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  queue.enqueue(first);
  return queue.dequeue();
}

export function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.dequeue();
  if (first >= second) {
    queue.enqueue(first);
    return second;
  } else {
    queue.enqueue(second);
    return first;
  }
}

export function takeNextSmallest(numberQueue) {
  if (numberQueue.peek() === undefined) {
    return undefined;
  }
  let first = numberQueue.dequeue();
  if (numberQueue.peek() === undefined) {
    return first;
  }
  let second = numberQueue.peek();
  while (first > second) {
    numberQueue.enqueue(first);
    first = numberQueue.dequeue();
    second = numberQueue.peek();
  }
  return first;
}
