const sumAll = function(num1, num2) {
    let finalSum = 0;
    let bigger = 0;
    let smaller = 0;
    // check if the nums are intergers and not negative
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    } else if (num1 < 0 || num2 < 0){
        return "ERROR";
    }

    // checking the bigger and smaller number
    if (num1 > num2){
        bigger = num1;
        smaller = num2;
    } else {
        bigger = num2;
        smaller = num1;
    }

    // adding the number between them
    for(let i = smaller; i < bigger + 1; i++){
        finalSum += i;
    }
    return finalSum

};

// Do not edit below this line
module.exports = sumAll;
