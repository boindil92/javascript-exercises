const removeFromArray = function(array,...ar) {

    let i = 0;
    let newArray=[];

    while (i < array.length) {                     //devi fare questo per ogni elemento dato di ...ar 
        if (array[i] != ar) {
            newArray.push(array[i]);
        }
  
    i++;
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
