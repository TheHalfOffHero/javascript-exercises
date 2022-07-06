const sumAll = function(num1, num2) {
    //defining sum variable
    let sum = 0;

    //check for whether a parameter is negative
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    //checks to see if a parameter is the right type, namely a number
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "ERROR"
    }
    //first check which number is larger then do logic based on that
    if (num1 < num2) {

        //create an array between lower and higher, ie num1 and num2
        for (let cntr = num1; cntr <= num2; cntr++) {
            sum = sum + cntr;
        }
    } else {
        for (let cntr = num2; cntr <= num1; cntr++) {
            sum = sum + cntr;
        }
    }

    //return the accumulated sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
