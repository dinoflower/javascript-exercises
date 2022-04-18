const removeFromArray = function(array, ...inputs) {
  for (let i = 0; i < inputs.length; i++) {
    let index = array.indexOf(inputs[i]);
    console.log(index);
    array.splice(index, 1);
  }
  return array;
};

// if the ...values are an array, need to access each item within the array in order to compare


//const removeFromArray = function (array, ...inputs) {
//  let newArray = [
//  ];
//  for (let element of array) {
//    if (element === inputs[i]) {
//      continue;
//    }
//    else {
//      newArray.push(element);
//    }
//  }
//  return newArray;
//};

// Do not edit below this line
module.exports = removeFromArray;
