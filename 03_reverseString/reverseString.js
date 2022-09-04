
const reverseString = function(str) {
    let arr = str.split("");
    console.log(arr);
    let length = str.length;
    let final = [];
    for (let i = length; i > -1; i--){
        final.push(arr[i]);
    } 
    let reversed = final.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

