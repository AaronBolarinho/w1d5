
var numList = [];

// This numList I was useing for testing
// var numList = [4, 8, 3, 10, 9, 17];

function pushNum (num) {
  numList.push(num)
}

// pushNum(5);
// console.log(numList);

function sortList() {
  numList.sort(function(a, b) {
  return a - b;
});
  console.log(numList);
}

// sortList();

module.exports = {
  pushNum: pushNum,
  sortList: sortList
}


// Create a module that exports a function that takes a number as a parameter and stores it in a list. The list should not be accessible from outside the module.

// Export another function that returns a version of the data list that is sorted in ascending order. The function you use to sort the data correctly should not be accessible from outside the module. (Think back to the Custom Sorting Exercise when handling sorting)