const sumAll = function(num1, num2) {
    let final = 0;
    if (num1 >= 0 && num2 >= 0 && typeof num1 === "number" && typeof num2 === "number") {
        if (num1 < num2){
            for (let i = num2; i >= num1; i--) {
                final += i;
            }
        } else {
            for (let i = num1; i >= num2; i--) {
                final += i;
            }
        }
    } else {
        final = "ERROR";
    }
    return final;

};

// Do not edit below this line
module.exports = sumAll;
