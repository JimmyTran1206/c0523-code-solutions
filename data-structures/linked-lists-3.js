import LinkedList from './lib/linked-list';

export function removeTail(list) {
  while (list.next !== null) {
    const curr = list.next;
    if (curr.next === null) {
      list.next = null;
      return list;
    }
    list = list.next;
  }
}

export function updateNext(list, value) {
  if (list.next === null) {
    return undefined;
  }
  const newNode = new LinkedList(value);
  const second = list.next;
  const others = second.next;
  list.next = newNode;
  newNode.next = others;
  return list;
}

export function insertNext(list, value) {
  const newNode = new LinkedList(value);
  const formerSecond = list.next;
  list.next = newNode;
  newNode.next = formerSecond;
}

export function removeNext(list) {
  if (list.next !== null) {
    const second = list.next;
    const third = second.next;
    list.next = third;
  }
}

export function swapFront(list) {
  if (list.next !== null) {
    const second = list.next;
    list.next = second.next;
    second.next = list;
    list = second;
  }
  return list;
}
