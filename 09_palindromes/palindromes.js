const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    str = str.replaceAll(" ", "");
    str = str.toLowerCase();
    let newStr = "";
    for (i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    if (newStr === str) {
        return true;
    } else {
        return false;
    }
    return newStr;
};

// Do not edit below this line
module.exports = palindromes;
