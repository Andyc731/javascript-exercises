const removeFromArray = function(array, ...args) {
    let removeIndex = [...args].sort();

    for (let i = removeIndex.length - 1; i >= 0; i--){
        if (typeof removeIndex[i] === "number") {
            array.splice(removeIndex[i] - 1, 1);
        }
    }
    for (let i = removeIndex.length - 1; i >= 0; i--) {

        for (let j = array.length - 1; j >= 0; j--) {
            if (removeIndex[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
