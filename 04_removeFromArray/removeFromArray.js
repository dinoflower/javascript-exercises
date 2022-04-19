const removeFromArray = function(array, ...inputs) {
  for (let i = 0; i < inputs.length; i++) {
    let index = array.indexOf(inputs[i]);
    if (index < 0) {
      continue;
    }
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
