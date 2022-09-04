const removeFromArray = function(arr, ...args) {
    let length = args.length;
    let lengthOfArr = arr.length;
    let index = 0;
    for (let i = 0; i < length; i++){
        arr.forEach(function(value, index){
            if (value === args[i]){
                arr.splice(index, 1);
            }
        })
    }
    return arr;
};

// [1. 2. 3. 4.]    
// [3 4 6]
// Do not edit below this line
module.exports = removeFromArray;
