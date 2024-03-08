const removeFromArray = function(array,...disc) {

    let newArr=[];
    

    for (let i=0; i<array.length; i++) {
        if (disc.indexOf(array[i])=== -1) {
            newArr.push(array[i]);
        }
    }


    

    
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;