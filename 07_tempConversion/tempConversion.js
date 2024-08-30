const convertToCelsius = function(temp) {
    const celcius = (temp - 32) * (5 / 9);
    return Math.round(celcius * 10) / 10;
}

const convertToFahrenheit = function(temp) {
    const fahrenheit = temp * (9 / 5) + 32;
    return parseFloat(fahrenheit.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};