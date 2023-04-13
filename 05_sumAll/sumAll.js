const sumAll = function(numOne, numTwo) {
    if(numOne < 0 || numTwo < 0 || typeof(numOne) !== 'number' || typeof(numTwo) !== 'number') {
        return 'ERROR';
    }

    let smallNum = numOne;
    let bigNum = numTwo;

    if(bigNum < smallNum) {
        smallNum = numTwo;
        bigNum = numOne;
    }

    let totalSum = smallNum;
    
    for(let i = smallNum + 1; i <= bigNum; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
