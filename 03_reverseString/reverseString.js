const reverseString = function(string) {
    let array = string.split('');
    array.reverse();
    let outputString = array.join('');
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
