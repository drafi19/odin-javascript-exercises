const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let result = a.reduce((total, current) => total + current, 0);
  return result;
};

const multiply = function(a) {
  let result = a.reduce((total, current) => total * current, 1);
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a ===0 || a === 1) return 1;
  return a * factorial(a - 1);
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
