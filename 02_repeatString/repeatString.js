const repeatString = function(str, number) {
    if (number < 0) {
        return "ERROR";
    }
    let finalStr = "";
    for(let i = 0; i < number; i++) {
        finalStr += str;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
