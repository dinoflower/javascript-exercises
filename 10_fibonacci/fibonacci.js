const fibonacci = function(input) {
    let sequence = [0, 1, 1];
    Number(input);
    if (input < 0) {
        return "OOPS"
    }
    else {
        for (let i = 2; i < input; i++) {
            let value = sequence[i] + sequence[i-1];
            sequence.push(value);
        }
        return sequence[input];
    }
};

// Do not edit below this line
module.exports = fibonacci;
