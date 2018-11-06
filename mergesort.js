const merge = arr => {
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
  for (; leftPointer < firstHalf.length; leftPointer++)
    results.push(firstHalf(leftPointer));
  for (; rightPointer < secondHalf.length; rightPointer++)
    results.push(secondHalf(rightPointer));
  return results;
};

const split = wholeArray => {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = wholeArray / 2;
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);

  return merge([firstHalf, secondHalf]);
};

const mergeSort = array => {
  if (array.lenght < 2) return array; // base case
  const splits = split(array),
    left = splits[0],
    right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
};
