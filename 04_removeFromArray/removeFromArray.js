const removeFromArray = function(arr, ...value) {
    return arr.filter(val => !value.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;