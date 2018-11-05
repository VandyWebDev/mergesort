// function split(wholeArray) {
//   /* your code here to define the firstHalf and secondHalf arrays */
//   const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
//   const secondHalf = wholeArray.slice(
//     Math.floor(wholeArray.length / 2),
//     wholeArray.length
//   );
//   let arr = [];
//   // BASE CASE
//   if (firstHalf.length === 1 && secondHalf.length === 1) {
//     return arr;
//   } else {
//     split([firstHalf, secondHalf]);
//   }
//   // return [firstHalf, secondHalf];
// }

function split(wholeArray) {
  let arr = [];
  for (let i = 0; i < wholeArray.length; i++) {
    arr.push([wholeArray[i]]);
  }
  return arr;
}

console.log(split([1, 2, 3, 4]));

function mergeSort(array) {
  /* your code here */
}
