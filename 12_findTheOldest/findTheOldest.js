const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = (new Date()).getFullYear();
            const last = a.yearOfDeath - a.yearOfBirth;
            const next = b.yearOfDeath - b.yearOfBirth;
            return last > next ? -1 : 1;
        }
        else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = (new Date()).getFullYear();
            const last = a.yearOfDeath - a.yearOfBirth;
            const next = b.yearOfDeath - b.yearOfBirth;
            return last > next ? -1 : 1;
        }
        else {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
        }
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
