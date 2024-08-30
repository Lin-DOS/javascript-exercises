const add = function(...args) {
    let total = 0;
    for (const i of args) {
        total += i;
    }
    return total;
}

const subtract = function(first, ...args) {
    let total = 0;
    for (const i of args) {
        total -= i;
    }     
    return first + total;
}

const sum = function(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

const multiply = function(array) {
    let total = 1
    for (i = 0; i < array.length; i++) {
        total *= array[i]
    }
    return total;
}

const power = function(x, y) {
    return Math.pow(x, y);
}

const factorial = function(number) {
    let answer = number;
    if (number === 0) return 1;
    for (i = 1; i < number; i++) {
        answer *= (number - i)
    }  
    return answer;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};