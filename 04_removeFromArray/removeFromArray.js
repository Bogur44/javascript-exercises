const removeFromArray = function(array, ...char) {
    const arrayString = [];
    array.forEach((item) => {
        if(!char.includes(item)){
            arrayString.push(item);
        }
    })
    return arrayString

};

// Do not edit below this line
module.exports = removeFromArray;
