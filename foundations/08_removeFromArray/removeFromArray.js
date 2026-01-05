const removeFromArray = function (arr, num, ...otherNum) {
  return arr.filter((number) => number !== num && !otherNum.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
