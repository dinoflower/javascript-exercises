const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const total = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return total;
};

const multiply = function(array) {
  const product = array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  return number < 2 ? 1 : number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
