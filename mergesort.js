function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = wholeArray / 2;
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);

  return merge([firstHalf, secondHalf]);
}

function merge(arr) {
  let results = [];
  let firstHalf = arr[0];
  let secondHalf = arr[1];

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
}
