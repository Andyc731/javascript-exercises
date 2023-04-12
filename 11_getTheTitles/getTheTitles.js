const getTheTitles = function(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].title);
    }
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
