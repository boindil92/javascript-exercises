const reverseString = function(string) {

    let counter=string.length;
    let newstring;

    for (i=counter;i>0;i--) {
       let piece= string.slice(i);

       newstring=newstring+piece;

    }
    return newstring;

};

// Do not edit below this line
module.exports = reverseString;