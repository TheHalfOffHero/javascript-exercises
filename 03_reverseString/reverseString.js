const reverseString = function(str) {
    let tmp = str.split("");
    tmp = tmp.reverse();
    tmp = tmp.join("");
    return tmp;
};

// Do not edit below this line
module.exports = reverseString;
