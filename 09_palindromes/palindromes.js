const palindromes = function (string) {
    const lowerCase = string.toLowerCase();
    const noPunctuation = lowerCase.replace(/[!.?, ]/g, "");
    const array = noPunctuation.split("");
    const reversed = array.reverse();
    const reversedString = reversed.join("")

    if (reversedString === noPunctuation) {
        return true;
    }   else return false;
} 

// Do not edit below this line
module.exports = palindromes;