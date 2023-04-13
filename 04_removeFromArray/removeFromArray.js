const removeFromArray = function() {
    let argsArray = Array.from(arguments);
    let argsLen = argsArray.length;
    let valueArray = argsArray[0];
    
    for(let i = 0; i < valueArray.length; i++) {
        let j = 1;
        while(j < argsLen) {
            if(valueArray[i] === argsArray[j]) {
               valueArray.splice(i, 1); 
               i = i - 1;
            }
            j++;
        }
    }

    return valueArray;
};

// Do not edit below this line
module.exports = removeFromArray;
