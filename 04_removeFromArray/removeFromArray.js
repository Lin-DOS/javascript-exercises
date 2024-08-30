const removeFromArray = function(array, ...args) {

    function findElement(x) {
        return !args.includes(x);
    }

    return array.filter(findElement)

    // same as above
    return array.filter(x => !args.includes(x))
}

console.log(removeFromArray([1, 3, 4, 2, 0, "m", 1], 1, 3, 3, 1, 2))

// Do not edit below this line
module.exports = removeFromArray;