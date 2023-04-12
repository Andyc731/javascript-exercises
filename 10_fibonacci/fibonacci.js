const fibonacci = function(num) {
    function fibo(num) {
        if (num > 2) {
            num = fibo(num - 1) + fibo(num - 2);
            return num;
        } else if (num < 0) {
            return "OOPS"
        } else {
            return 1;
        }
    }
    return fibo(num);
};

// Do not edit below this line
module.exports = fibonacci;
