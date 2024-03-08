const removeFromArray = function(array,...disc) {

    let newArr=[];
    

    for (let i=0; i<array.length; i++) {
        if (disc.indexOf(array[i])=== -1) { 
            newArr.push(array[i]);
        }
    }


//disc.index cerca l' indice di posizione del valore da scartare, all'interno di array
//alla posizione i, se il risultato è stretto uguale di -1 vuol dire che non è presente.  

    
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;