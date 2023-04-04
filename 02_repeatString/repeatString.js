const repeatString = function(string, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result = result.concat(string);
    }
    if (num < 0) {
        return "ERROR";
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
