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
