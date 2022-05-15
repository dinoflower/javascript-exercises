const palindromes = function (string) {
    let temp = string.toLowerCase();
    let newArray = Array.from(temp);
    let filtered = newArray.filter(letter => /[a-z]/g.test(letter));
    let newString = filtered.join('');
    let reversedArray = filtered.reverse();
    let reversedString = reversedArray.join('');
    console.log(newString);
    console.log(reversedString);
    return newString === reversedString ? true : false;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
