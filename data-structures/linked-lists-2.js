import LinkedList from './lib/linked-list';

export function getLength(list) {
  let length = 1;
  while (list.next !== null) {
    list = list.next;
    length++;
  }
  return length;
}

export function append(list, value) {
  const newNode = new LinkedList(value);
  while (list.next !== null) {
    list = list.next;
  }
  list.next = newNode;
}

export function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}

export function includes(list, value) {
  while (list) {
    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}
