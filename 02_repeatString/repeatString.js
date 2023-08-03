const repeatString = function(string,number) {
    
     let add=string;
     
     if (number<0) {
        return 'ERROR';
     } else if (number==0) {
        return '';
     } else if(number>0) {
        for (i=1;i<number;i++) {
            string=string+add;
        }
        return string;
     }

};

// Do not edit below this line
module.exports = repeatString;
