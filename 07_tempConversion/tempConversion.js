const convertToCelsius = function(originalTemp) {
  let newTemp = (originalTemp - 32) * (5/9);
  newTemp = Math.round(newTemp*10)/10;
  return newTemp;
};

const convertToFahrenheit = function(originalTemp) {
  let newTemp = (originalTemp * (9/5)) + 32;
  newTemp = Math.round(newTemp*10)/10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
