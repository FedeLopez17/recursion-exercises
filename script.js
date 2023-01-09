function sumRange(num) {
  // Base case
  if (num === 1) return 1;

  // Recursive case
  return num + sumRange(--num);
}

function power(base, exponent) {
  // Base case
  if (exponent === 0) return 1;

  // Recursive case
  return base * power(base, --exponent);
}

function factorial(number) {
  // Base case
  if (number === 1) return 1;

  // Recursive case
  return number * factorial(--number);
}

function all(arr, callback) {
  // Base case
  if (arr.length === 1) return callback(arr[0]);

  // Recursive case
  const firstElement = arr.shift();
  return callback(firstElement) && all(arr, callback);
}

function productOfArray(arr) {
  // Base case
  if (arr.length === 1) return arr[0];

  // Recursive case
  const firstElement = arr.shift();
  return firstElement * productOfArray(arr);
}

// I struggled so much with this function, that I decided to look at the solution.
// I made sure to completely understand what is going on.
// In my attempts, I was close to the correct solution,
// but I couldn't figure out how to make the recursive function "branch out" when an object had different properties that where object themselves.
// According to the solution provided, a "wrapper" loop could be used for this, which makes a lot of sense.
function contains(targetValue, obj) {
  for (const key in obj) {
    // Base case
    if (obj[key] === targetValue) {
      return true;
    }

    // Recursive case
    if (typeof obj[key] === "object") {
      return contains(targetValue, obj[key]);
    }
  }
  return false;
}

// I struggled with this task as well, but I was able to solve it by myself.
// I used a loop whereas the solution provided did not.

// MY SOLUTION:
function totalIntegers(arr) {
  // Base case
  if (!Array.isArray(arr)) {
    return typeof arr === "number" && Number.isInteger(arr) ? 1 : 0;
  }

  // Recursive case
  let total = 0;
  for (const item of arr) {
    total += totalIntegers(item);
  }
  return total;
}

// SOLUTION PROVIDED:
function totalIntegersSolution(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegersSolution(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegersSolution(array);
}

function sumSquares(numbersArr) {
  // Base case
  if (!numbersArr.length) return 0;

  // Recursion case
  let total = 0;
  const firstElement = numbersArr.shift();

  if (Array.isArray(firstElement)) {
    total += sumSquares(firstElement);
  } else {
    total += firstElement * firstElement;
  }

  return (total += sumSquares(numbersArr));
}

function replicate(num, amountOfTimes, outputArray = []) {
  // Base case
  if (amountOfTimes <= 0) return outputArray;

  // Recursion case
  outputArray.push(num);
  replicate(num, --amountOfTimes, outputArray);

  return outputArray;
}
