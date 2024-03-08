const sumAll = function(a,b) {

    // let c=(Math.abs(a-b)+1);  apparently math doesn't work for big int.
    
    let d=0;

    
    
    if (a>=b) {
        c=(a-b)+1
        for (let i=0;i<c;i++){

            d=(d+(b+i))
 
         }


    } else {
        c=(b-a)+1
        for (let i=0;i<c;i++){

            d=(d+(a+i))
 
         }
    }



    if (d<0) { 
        d='ERROR';
    } else if (isNaN(d)) {
        d='ERROR';  
    } else {
        d=d;
    }

    return d;





    
};

// Do not edit below this line
module.exports = sumAll;
