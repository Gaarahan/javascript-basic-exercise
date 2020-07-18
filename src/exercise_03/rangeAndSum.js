export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let max = Math.max(start, end);
  let min = Math.min(start, end);
  const isASC = max === end;
  return Array.from(new Array(max - min), (n, i) => {
    return isASC? start + i : start - i;
  });
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  return numbers.length ? numbers.reduce((p, c) => p + c) : 0;
}
