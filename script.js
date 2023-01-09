function sumRange(num) {
  //Base case
  if (num === 1) return 1;

  //Recursive case
  return num + sumRange(--num);
}

function power(base, exponent) {
  //Base case
  if (exponent === 0) return 1;

  //Recursive case
  return base * power(base, --exponent);
}

function factorial(number) {
  //Base case
  if (number === 1) return 1;

  //Recursive case
  return number * factorial(--number);
}

function all(arr, callback) {
  //Base case
  if (arr.length === 1) return callback(arr[0]);

  //Recursive case
  const firstElement = arr.shift();
  return callback(firstElement) && all(arr, callback);
}

function productOfArray(arr) {
  //Base case
  if (arr.length === 1) return arr[0];

  //Recursive case
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
    //Base case
    if (obj[key] === targetValue) {
      return true;
    }

    //Recursive case
    if (typeof obj[key] === "object") {
      return contains(targetValue, obj[key]);
    }
  }
  return false;
}
