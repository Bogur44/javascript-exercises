const sumAll = function(first, last) {
    let finalSum = '';
    for(let i = first; i <= last; i++){
        finalSum.push(i);
    }
    let total = finalSum.reduce(function(a, b){
        return a + b
    })
    return total
};

// Do not edit below this line
module.exports = sumAll;
