const repeatString = function(str, num) {
    let result = "";

    //if num is a negative number then we return an error else proceed
    if (num < 0) {
        return "ERROR"
    }

    for (let index = 0; index < num; index++) {
        result = result + str
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
