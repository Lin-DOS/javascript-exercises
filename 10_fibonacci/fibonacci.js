const fibonacci = function(nthTerm) {
  const arr = [0, 1];

  if (typeof nthTerm === "string") {
    nthTerm = parseFloat(nthTerm);
  }

  if (nthTerm < 0 || !Number.isInteger(nthTerm)) {
    return "OOPS";
  }

  for (let n = 2; n <= nthTerm; n++) {
    arr[n] = arr[n - 1] + arr[n - 2]; 
  }

  return arr[nthTerm];
};

// Do not edit below this line
module.exports = fibonacci;