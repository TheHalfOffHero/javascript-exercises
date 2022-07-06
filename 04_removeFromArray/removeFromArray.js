const removeFromArray = function(...arr) {
    let result = arr[0]

    for (let i = 1; i < arr.length; i++) {
        
        result = result.filter(x => (x !== arr[i]))
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
