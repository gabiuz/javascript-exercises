const sumAll = function (firstNum, secondNum) {
  if (firstNum < 0 || !Number.isInteger(firstNum)) {
    return "ERROR";
  } else if (secondNum < 0 || !Number.isInteger(secondNum)) {
    return "ERROR";
  } else {
    let largerNum;
    let smallerNum;
    if (firstNum > secondNum) {
      largerNum = firstNum;
      smallerNum = secondNum;
    } else {
      largerNum = secondNum;
      smallerNum = firstNum;
    }
    let numInBetween = [];
    while (smallerNum <= largerNum) {
      numInBetween.push(smallerNum);
      smallerNum++;
    }
    const total = numInBetween.reduce((total, num) => total + num, 0);
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
