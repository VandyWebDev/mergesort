function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let results = [];

  let leftPointer = 0; // 1 2
  let rightPointer = 0; // 0 1

  while (leftPointer < firstHalf.length && rightPointer < secondHalf.length) {
    if (firstHalf[leftPointer] < secondHalf[rightPointer]) {
      results.push(firstHalf[leftPointer]);
      leftPointer++;
    } else {
      results.push(secondHalf[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer < firstHalf.length) {
    results.push(firstHalf[leftPointer]);
    leftPointer++;
  }
  while (rightPointer < secondHalf.length) {
    results.push(secondHalf[rightPointer]);
    rightPointer++;
  }
  return results;
}

function mergeSort(array) {
  /* your code here */
  if (array.length <= 1) return array;
  let splits = split(array);
  let firstHalf = mergeSort(splits[0]);
  let secondHalf = mergeSort(splits[1]);
  return merge(firstHalf, secondHalf);
}
console.log(mergeSort([2, 10, 0, 4, 8, -1, 3]));
