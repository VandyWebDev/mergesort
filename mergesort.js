function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = wholeArray / 2;
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);

  return merge([firstHalf, secondHalf]);
}

function merge(arr) {
  let results = [];
  let leftPointer = 0; // 1 2
  let rightPointer = 0; // 0 1

  // if leftPointer < arr[leftpointer]
    whiile(leftPointer < arr[leftPointer].length && rightPointer < arr[rightPointer].length) {
      if(arr[leftPointer] < arr[rightPointer]) {
        results.push(arr[leftPointer])
        leftPointer++;
      } else {
        results.push(arr[rightPointer]);
        rightPointer++;
      }
    }


    return results;
  }


function mergeSort(array) {
  /* your code here */
}
