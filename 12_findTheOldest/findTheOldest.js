const findTheOldest = function(arr) {
  
  return arr.reduce((acc, element) => {
    const currentDate = new Date().getUTCFullYear();

    const oldest = !acc.yearOfDeath ? currentDate - acc.yearOfBirth : 
                    acc.yearOfDeath - acc.yearOfBirth;

    const currentValue = !element.yearOfDeath ? currentDate - element.yearOfBirth :
                          element.yearOfDeath - element.yearOfBirth;
    
    return currentValue > oldest ? element : acc;
  });
};

// Do not edit below this line
module.exports = findTheOldest;