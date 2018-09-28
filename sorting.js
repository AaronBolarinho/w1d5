// Implement a Node.js script that imports the functionality of your module, adds at least 5 different data points to the module's data list, and outputs the sorted list.

var myNewDat = [4, 8, 3, 10, 9, 17];

var pushNumber = require("./sortingModules");
var getSorted = require("./sortingModules");

function addNum (myNewDat) {
  for (var i = 0; i < myNewDat.length; i++) {
    pushNumber.pushNum(myNewDat[i])
  }
  getSorted.sortList();
}

addNum(myNewDat);