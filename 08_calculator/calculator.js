const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let final = 0;
	for (let key in num) {
    final += num[key];
  }
  return final;
};

const multiply = function(num) {
  let final = 1;
	for (let key in num) {
    final *= num[key];
  }
  return final;
};

const power = function(num1, num2) {
  let final = 1;
  for (let i = 0; i < num2; i++){
    final *= num1;
  }
	return final;
};

const factorial = function(num) {
	function factorial(num) {
    if (num > 1) {
      num *= factorial(num-1);
      return num;
    } else {
      return 1;
    }
  }
  return factorial(num);
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
