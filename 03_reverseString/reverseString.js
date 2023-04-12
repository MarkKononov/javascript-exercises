const reverseString = function(stringToReverse) {
    let stringLen = stringToReverse.length;
    if(stringLen == 0) {
        return '';
    }
    else if(stringLen == 1) {
        return stringToReverse;
    }

   let reversedString = stringToReverse.slice(-1);

   for(let i = stringLen - 2; i >= 0; i--) {
        reversedString = reversedString + stringToReverse.slice(i, i + 1);
   }

   return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
