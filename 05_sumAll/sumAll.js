const sumAll = function(x, y) {
    if (x < 0 || y < 0) {
        return 'ERROR';
    }
    else if (Number(x) !== x || Number(y) !== y) {
        return 'ERROR';
    }
    else {
        let sum = 0;
        if (x < y) {
            while (x < y) {
                sum += x;
                x++;
            }
            sum += y;
        }
        else {
            while (x > y) {
                sum += x;
                x--;
            }
            sum += y;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
