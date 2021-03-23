// Написать код функции 'findUnique', которая за один проход вернет все уникальные числа.

const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  return [...new Set(arr)];
}

console.log('findUnique(array) >>>>', findUnique(array));

// В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, 
// остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.

const array2 = [2, 1, 3, 5];

function findMissing(arr) {
  const n = arr.length + 1;
  const total = n * (n + 1) / 2;

  return total - arr.reduce((el, accum) => el + accum);
}

console.log('findMissing(array2) >>>>', findMissing(array2));

// Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). 
// Для вывода значений используйте функцию console.log().

var someList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function reversePrint(linkedList) {

  function reverseList(head) {
    if (!head) return null;
    if (!head.next) return head;

    let rev = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return rev;
  };

  const revList = reverseList(linkedList);
  let currNode = revList;

  while (currNode !== null) {
    console.log('reversePrint(someList) >>>>', currNode.value);
    currNode = currNode.next;
  }

}
reversePrint(someList);
