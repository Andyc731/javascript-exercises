const findTheOldest = function(array) {
    return array.reduce((accum, current) => {
        if (age(accum.yearOfBirth, accum.yearOfDeath) > age(current.yearOfBirth, current.yearOfDeath)) {
            return accum;
        } else {
            return current;
        }
    }, {})
};

function age(birth, death) {
    if(!death) {
        return new Date().getFullYear() - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
