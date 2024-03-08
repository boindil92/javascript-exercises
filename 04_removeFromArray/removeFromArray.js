const removeFromArray = function(array,...disc) {

    let i=0;
    let e=0;

    let newDisc=[disc];   //crea array con i numeri da scartare per compararli
    let newArray=[];      //crea array da riempire con i risultati della comparazione

    while (e<newDisc.length) {
        while (i<array.length) {

            if (array[i] != newDisc[e]){
            newArray.push(array[i]);
            }
            
        i++;
        }
    e++
    }
    return newArray;
// il problema è che cosi' al secondo giro del primo loop reinserisco tutti i valori,
//anche quelli scartati al primo giro... funziona solo se ho un parametro solo...



};

// Do not edit below this line
module.exports = removeFromArray;
