//const removeFromArray = function(array, ...values) {
//  let index = array.indexOf(value);
//  console.log(index);
//  array.splice(index, 1);
//  return array;
//};

//const removeFromArray = function(array, value) {
//  function inArray() {
//    for (let element of array) {
//      if (element === value) {
//        console.log(value);
//        continue;
//      }
//      console.log(element);
//      return element;
//    }
//  }
//  let filtered = array.filter(inArray);
//  return filtered;
//}

const removeFromArray = function (array, value) {
  let newArray = [
  ];
  for (let element of array) {
    if (element === value) {
      continue;
    }
    else {
      newArray.push(element);
    }
  }
  return newArray;
};

// Do not edit below this line
//module.exports = removeFromArray;
